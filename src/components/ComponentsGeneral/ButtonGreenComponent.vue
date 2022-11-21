<template>
    <button>{{ text }}</button>
</template>

<script>
export default {
    name: 'ButtonGreenComponent',
    props: {
        text: []
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

button {
    font-size: $txt-md;
    text-transform: uppercase;
    // font-weight: 500;
    color: white;
    background-color: $btn-green;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 2rem;
}
</style>