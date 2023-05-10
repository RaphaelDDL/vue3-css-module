<template>
    <h2>
        multiple named module=>
        <span :class="moduledefault.modulenamedbrands">green</span> |
        <span :class="modulecocacola.modulenamedbrands">red</span> |
        <span :class="modulepepsi.modulenamedbrands">black</span>
    </h2>
</template>

<style lang="scss" module="moduledefault">
.modulenamedbrands {
    color: green;
}
</style>

<style lang="scss" module="modulecocacola">
.modulenamedbrands {
    color: red;
}
</style>

<style lang="scss" module="modulepepsi">
.modulenamedbrands {
    color: black;
}
</style>
