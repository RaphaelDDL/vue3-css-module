<template>
    <h2>
        multiple module=>
        <span :class="$style.multi1">orange</span> | <span :class="$style.multi2">purple</span>
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
