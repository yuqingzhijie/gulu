<template>
    <svg class="g-icon">
        <use :xlink:herf="`#i-${name}`"></use>
    </svg>
</template>

<script>
export default {
    props: ['name'],
    data() {
        return {
        }
    }
}
</script>
<style lang="scss">
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>