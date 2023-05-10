<template>
    <h2 :class="classes.scopedmodulenamed">scoped module named: green-(red | black)</h2>
</template>

<style lang="scss" scoped module="classes">
.scopedmodulenamed {
    color: green;
}
</style>

<style lang="scss" scoped module="classes" brand="cocacola">
.scopedmodulenamed {
    color: red;
}
</style>

<style lang="scss" scoped module="classes" brand="pepsi">
.scopedmodulenamed {
    color: black;
}
</style>
