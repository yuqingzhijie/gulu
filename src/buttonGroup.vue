<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
        }
    },
    methods: {},
}
</script>
<style lang="scss">
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;

        >.g-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -2px;
            }
            // &:not(:first-child) {
            //     border-left: none;
            // }

            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>