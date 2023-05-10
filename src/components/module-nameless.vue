<template>
    <h2 :class="$style.mnameless">module nameless: green-(red | black)</h2>
</template>

<style lang="scss">
.mnameless {
    color: green;
}
</style>

<style lang="scss" module brand="cocacola">
.mnameless {
    color: red;
}
</style>

<style lang="scss" module brand="pepsi">
.mnameless {
    color: black;
}
</style>
