<template>
    <div class="card-image" v-for="(item, index) in obj" :key="index">
        <img :src="item.url" alt="project">
        <div class="over">
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardImage',
    props: {
        obj: Array
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

.card-image {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    width: calc((100% - 4rem) / 3);
    height: 250px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    .over {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.242);

        span {
            padding: 1rem;
            text-align: center;
            font-weight: 600;
            font-size: 1.2rem;
            position: absolute;
            bottom: 0;
            color: white;
            text-transform: none;
        }
    }
}
</style>