<template>
    <section class="section1">

        <swiper :style="{
            '--swiper-navigation-color': '#c0c3d0',
            '--swiper-pagination-color': '#c0c3d0',
        }" :speed="600" :parallax="true" :pagination="{ clickable: true }" :navigation="true" :modules="modules"
            :initial-slide="1" class="mySwiper">
            <div slot="container-start" class="parallax-bg" data-swiper-parallax="-60%"></div>
            <swiper-slide class="swiper1">
                <div class="content1">
                    <div class="title" data-swiper-parallax="-300">
                        <h2>We Share <span>Good Ideas</span></h2>
                    </div>
                    <div class="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit.
                        </p>
                    </div>
                    <ButtonGreen :text="'Get In Touch'" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content2">
                    <div class="title" data-swiper-parallax="-300">
                        <h2>Ready <span>Team</span></h2>
                    </div>

                    <div class="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit.
                        </p>
                    </div>
                    <ButtonGreen :text="'Get In Touch'" />
                </div>
            </swiper-slide>
            <swiper-slide class="swiper3">
                <div class="content3">
                    <div class="title" data-swiper-parallax="-300">
                        <h2>Talk to a <span>Consultant</span></h2>
                    </div>
                    <div class="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit.
                        </p>
                    </div>
                    <ButtonGreen :text="'Get In Touch'" />
                </div>
            </swiper-slide>
        </swiper>

    </section>
</template>

<script>
import ButtonGreen from '../ComponentsGeneral/ButtonGreen.vue';
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



import { Parallax, Pagination, Navigation } from "swiper";


export default {
    name: "section1",
    components: {
        ButtonGreen,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Parallax, Pagination, Navigation],
        };
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

.section1 {
    @include center();
    position: relative;
    width: 100%;
    height: calc(100vh - 50px);

}

.swiper {
    width: 100%;
    height: 100%;
    background: white;

    &:hover {
        cursor: e-resize;
    }

    h2 {
        line-height: 8rem;
        color: #20333e;
        width: 60%;
        font-size: 5rem;
        font-weight: 700;

        span {
            position: relative;
            padding: 0 10px;
            margin-left: -10px;
            color: $btn-green;
            background-color: #26aeae2a;
            border-radius: 5px;
        }
    }

    p {
        line-height: 2.5rem;
        font-size: 1.4rem;
        width: 600px
    }
}

.swiper-slide {
    @include center();
    flex-flow: column;
    color: gray;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;

    .content1 {
        margin-left: 200px;
    }

    .content2 {
        text-align: center;

        h2 {
            width: 600px;
        }
    }

    .content3 {
        margin-right: -75px;
    }
}

.parallax-bg {
    background-image: url('/images/bg-parallax.png');
    overflow: visible;
    position: absolute;
    left: 0;
    top: 0;
    width: 140%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: 130%;
    background-position: center;
    background-position-x: 0px;
}

.swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
}

.swiper-slide .subtitle {
    font-size: 21px;
}

.swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
}

.swiper1 {
    align-items: flex-start;
}

.swiper3 {
    align-items: flex-end;
}


// .background {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     z-index: -1;
// }
</style>