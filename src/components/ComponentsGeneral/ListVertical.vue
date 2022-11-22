<template>
    <div>
        <ul>
            <h3 v-if="title">{{ title }}</h3>
            <li v-for="(link, index) in list" :key="index">
                <i class="fa-regular fa-angle-right"></i><a :href="link.url">{{ link.text }}</a>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'ListVertical',
    props: {
        title: String,
        list: {}
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

ul {
    @include center();
    flex-flow: column;
    align-items: flex-start;
    margin-bottom: 0;
    padding-left: 0;
    padding-top: 5px;

    li {
        padding-top: 10px;
        padding-left: 5px;

        i {
            margin-right: 10px;
        }
    }
}
</style>