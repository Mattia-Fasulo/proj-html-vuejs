<template>
    <button>{{ text }}</button>
</template>

<script>
export default {
    name: 'ButtonGreen',
    props: {
        text: String
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
    transition: all 0.5s ease-out;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transform: scale(1.1);
    }
}
</style>