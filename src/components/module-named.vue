<template>
    <h2 :class="classes.mnamed">module named: green-(red | black)</h2>
</template>

<script>
export default {
}
</script>

<style lang="scss" module="classes">
.mnamed {
    color: green;
}
</style>

<style lang="scss" module="classes" brand="cocacola">
/* */
.mnamed {
    color: red;
}
</style>

<style lang="scss" module="classes" brand="pepsi">
/* */
.mnamed {
    color: black;
}
</style>
