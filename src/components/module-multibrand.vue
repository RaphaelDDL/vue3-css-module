<template>
    <h2>
        module multi of same brand=>
        <span :class="$style.multibrand1">green-orange-purple</span> | <span :class="$style.multibrand2">pink-gray</span>
    </h2>
</template>
<style lang="scss" module>
.multibrand1 {
    color: green;
}
</style>

<style lang="scss" module brand="cocacola">
.multibrand1 {
    color: orange;
}
.multibrand2 {
    color: pink;
}
</style>

<style lang="scss" module brand="cocacola">
.multibrand1 {
    color: purple;
}
// .multibrand2 {
//     color: gray;
// }
</style>
