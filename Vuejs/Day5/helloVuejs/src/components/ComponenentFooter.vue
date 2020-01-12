<template>
    <footer>
        <h1> {{title}} </h1>
    </footer>
</template>

<script>
export default {
    name: 'com-footer',
    props: {
        title: {
            type: String,
            default: "Default value"
        }
    },
    data() {
        return {
            textFooter: 'Footer'
        }
    }
}
</script>

<style>

</style>
