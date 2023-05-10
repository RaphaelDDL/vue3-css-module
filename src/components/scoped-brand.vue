<template>
    <h2 class="scopedbrand">scoped brand:  green-(red | black)</h2>
</template>

<style lang="scss" scoped>
.scopedbrand {
    color: green;
}
</style>

<style lang="scss" scoped brand="cocacola">
.scopedbrand {
    color: red;
}
</style>

<style lang="scss" scoped brand="pepsi">
.scopedbrand {
    color: black;
}
</style>
