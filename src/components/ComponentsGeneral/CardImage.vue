<template>
    <div class="card-image" v-for="(item, index) in obj" :key="index">
        <img :src="item.url" alt="project">
        <div class="over">
            <div class="icons"><i class="fa-regular fa-user"></i> Codings <i class="fa-regular fa-clock"></i> 2 Years
            </div>
            <span>{{ item.text }}</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
    height: 350px;
    overflow: hidden;

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
        display: flex;
        flex-flow: column;
        justify-content: end;
        z-index: 10;



        span {
            padding: 1rem;
            text-align: center;
            font-weight: 600;
            font-size: 1.6rem;
            color: white;
            text-transform: none;
        }

        p {
            margin-bottom: -80px;
            padding: 1rem;
            color: rgb(210, 210, 210);
            text-align: center;
        }

        .icons {
            font-size: 1.4rem;
            color: rgb(210, 210, 210);
            position: absolute;
            top: -50px;
            right: 95px;

        }
    }
}
</style>