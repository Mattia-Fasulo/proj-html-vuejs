<template>
    <div>
        <ul>
            <h3 v-if="title">{{ title }}</h3>
            <li v-for="(link, index) in list" :key="index">
                <a :href="link.url">{{ link.text }}</a>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'ListHorizontal',
    props: {
        title: [],
        list: {}
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

ul {
    @include center();
    margin-bottom: 0;
    padding-left: 0;
}
</style>