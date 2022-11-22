<template>
    <div>
        <ul>
            <h3 v-if="title">{{ title }}</h3>
            <li v-for="(link, index) in list" :key="index">
                <p v-if="link.num">{{ link.num }}</p>
                <a :href="link.url" :class="{ 'active': link.current }">{{ link.text }}</a>
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