<template>
    <div class="my-card" v-for="(item, index) in obj" :key="index">
        <img v-if="item.img" :src="item.img" :alt="item.title">
        <h3><span v-if="item.icon" :class="item.icon"></span> {{ item.title }}</h3>
        <p>{{ item.text }}</p>
        <i class="fa-solid fa-arrow-right"></i>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        obj: Array
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;


.my-card {
    position: relative;
    padding: 2rem 1.5rem;
    width: calc((100% - 3rem) / 3);
    background-color: white;
    border-radius: 5px;

    img {
        width: 50px;
    }

    h3 {
        margin-top: 1.5rem;
        font-size: 1.5rem;
        font-weight: 600;
    }

    p {
        margin-top: 1.5rem;
    }

    i {
        display: none;
    }

}
</style>