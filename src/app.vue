<template>
<div>
    <ul style="padding-left: 30px;">
        <li style="color:blue;">Blue: Bugged</li>
        <li style="color:green;">Green: default/nobrand</li>
        <li style="color:red;">Red: CocaCola</li>
        <li style="color:black;">Black: Pepsi</li>
    </ul>
    <hr>
    <brand />
    <hr>
    <brand-external />
    <brand-external-module />
    <hr>
    <module />
    <module-named />
    <module-nameless />
    <hr>
    <module-multiple />
    <module-multibrand />
    <hr>
    <module-named-multiple />
    <hr>
    <scoped />
    <scoped-brand />
    <scoped-named />
    <scoped-nameless />
</div>
</template>

<script>
import brand from './components/brand';
import brandExternal from './components/brand-external';
import brandExternalModule from './components/brand-external-module';
import module from './components/module';
import moduleNamed from './components/module-named';
import moduleMultiple from './components/module-multiple';
import moduleMultibrand from './components/module-multibrand';
import moduleNameless from './components/module-nameless';
import moduleNamedMultiple from './components/module-named-multiple';
import scoped from './components/scoped';
import scopedBrand from './components/scoped-brand';
import scopedNamed from './components/scoped-module-named';
import scopedNameless from './components/scoped-module-nameless';

export default {
  name: 'App',
  components:{
    brand,
    brandExternal,
    brandExternalModule,
    module,
    moduleNamed,
    moduleNameless,
    moduleMultiple,
    moduleMultibrand,
    moduleNamedMultiple,
    scoped,
    scopedNamed,
    scopedNameless,
    scopedBrand,
  }
};
</script>

<style lang="scss">
body {
    color: blue;
}
h2 {
    color: inherit;
}
</style>

