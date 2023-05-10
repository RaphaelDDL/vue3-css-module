<template>
    <h2 :class="$style.scopedmodulenameless">scoped module nameless: green-(red | black)</h2>
</template>

<style lang="scss" scoped module>
.scopedmodulenameless {
    color: green;
}
</style>

<style lang="scss" scoped module brand="cocacola">
.scopedmodulenameless {
    color: red;
}
</style>

<style lang="scss" scoped module brand="pepsi">
.scopedmodulenameless {
    color: black;
}
</style>
