const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { createLoader } = require('simple-functional-loader');

const name = 'css-module-poc';

//======
// brand
//======
const BRANDS = ['cocacola', 'pepsi'];
let brand = process.env.ENTRY_POINT;
if (brand === undefined || !BRANDS.includes(brand)) {
    brand = BRANDS[0]; // eslint-disable-line prefer-destructuring
}
console.log(`Brand "${brand}" used`); // eslint-disable-line no-console

const otherBrands = BRANDS.filter((t) => t !== brand);
const otherBrandsCond = otherBrands.map((b) => new RegExp(`brand=${b}`));
//======

//======
// CSS Loaders
//======
const vueStyleLoader = {
    loader: 'vue-style-loader',
    options: {
        sourceMap: true,
    },
};

const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: true,
    },
};

const cssLoaderModule = {
    loader: 'css-loader',
    options: {
        modules: {
            mode: 'local',
            localIdentName: '[name]_[local]_[hash:base64]',
        },
    },
};

const sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: true,
        implementation: require('sass'),
    },
};

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        sourceMap: true,
        postcssOptions: {
            plugins: () => ['postcss-preset-env', require('cssnano')()],
        },
    },
};

const nullLoader = {
    loader: 'null-loader',
};
//======

module.exports = {
    entry: './index.js',
    mode: 'development',
    devtool: 'eval-source-map',
    context: path.resolve(__dirname),
    plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin()],
    resolve: {
        symlinks: true,
        extensions: ['.js', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                oneOf: [
                    // this matches `<style brand=TheOtherBrand>`
                    {
                        resourceQuery: otherBrandsCond,
                        use: nullLoader,
                    },
                    // this matches `<style module>`
                    {
                        resourceQuery: /module/,
                        use: [vueStyleLoader, cssLoaderModule, postCssLoader, sassLoader],
                    },
                    // this matches plain `<style>` or `<style scoped>`
                    {
                        use: [vueStyleLoader, cssLoader, postCssLoader, sassLoader],
                    },
                ],
            },

            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            /*
                Workaround single module style by deleting the entire
                style tags and contents that matches the other brand
             */
              {
                test: /\.vue$/,
                use: createLoader(function(source, map) {
                    const brandStyleRemoval = new RegExp(`(<style)(.*)(brand=("|')?${otherBrands[0]}("|')?)(.*?)>(.|\n)*?(<\/style>)`, 'gmi');
                    const sourceUnbranded = source?.replace(brandStyleRemoval, '');
                    return sourceUnbranded ?? source
                  }),
              },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: require('./.babelrc'),
                },
                exclude: (file) => /node_modules/.test(file),
            },
        ],
    },
};
