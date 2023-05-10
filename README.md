# vue3-css-module
multiple CSS Module issue

dual brand CSS module implementation issue. 

```
npm run start:cocacola
OR
npm run start:pepsi
```

- default body color blue
- cocacola has it's text colors red
- pepsi has it's text colors black
- some views might have different colors (expected color in text)

-----

Having more than one `style` tag marked with `module` attribute breaks implementation and only the last one in the file gets it's `___CSS_LOADER_EXPORT___.locals` hash exported. 

Simplest example:

```
<template>
    <h2>
        multiple module=> <span :class="$style.multi1">orange</span> | <span :class="$style.multi2">purple</span>
    </h2>
</template>

<style lang="scss" module>
.multi1 {
    color: orange;
}
</style>

<style lang="scss" module>
.multi2 {
    color: purple;
}
</style>
```

While each style tag has it's data (sourcemap, values, etc) pushed to `___CSS_LOADER_EXPORT___`, the exports for CSS Module are overwritten by the next style tag.

First style tag:

```
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".module-multiple_multi1_[HASH]" /* sourcemap, source, etc*/]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"multi1": ".module-multiple_multi1_[HASH]"
};
```

Second style tag:
```
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".module-multiple_multi2_[HASH]" /* sourcemap, source, etc*/]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"multi2": ".module-multiple_multi2_[HASH]"
};
```  
  
Final Code:
```
    <h2>
        multiple module=> <span class="">orange</span> | <span class="module-multiple_multi2_[HASH]">purple</span>
    </h2>
```
 
 The first style tag's locals export is overwritten by the second, instead of merged/ammended, and therefore the first span class becomes empty (as the hashmap of class->hash doesn't exist).
 
