<template>
    <h2 :class="$style.externalcss">brands external css module: (red | black)</h2>
</template>

<style lang="scss" module brand="cocacola" src="../scss/externalcss-red.scss" />
<style lang="scss" module brand="pepsi" src="../scss/externalcss-black.scss" />
