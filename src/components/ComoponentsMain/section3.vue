<template>
    <section class="section3">


        <div class="container">
            <div class="text-section3">
                <span>Our Business Areas</span>
                <h2><span>The</span> Company</h2>
                <div class="my-flex">
                    <p>For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and
                        related services to select clients.</p>

                </div>
                <div class="cards-section3">
                    <CardComponent :obj="this.list" />
                </div>
                <div class="my-flex">
                    <ButtonGreen :text="'Get in Touch'" />
                    <ButtonGreen :text="'Read More'" />
                </div>
            </div>

        </div>



        <div class="bg-img">
            <img src="/images/about-4.jpg" alt="man">
        </div>
        <div class="svg-top">
            <img src="/images/bullets.png" alt="bullets">
        </div>
        <div class="svg-bot">
            <img src="/images/bullets.png" alt="bullets">
        </div>
    </section>
</template>

<script>


import { store } from '../../store.js';
import ButtonGreen from '../ComponentsGeneral/ButtonGreen.vue';
import CardComponent from '../ComponentsGeneral/CardComponent.vue';

export default {
    name: "section3",
    data() {

        return {
            store,
            list: [
                {
                    title: 'Tradition',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    url: '#',
                    icon: 'fa-regular fa-award'
                },
                {
                    title: 'Security',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    url: '#',
                    icon: 'fa-solid fa-lock'
                },
                {
                    title: 'Certificate',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    url: '#',
                    icon: 'fa-solid fa-pen-to-square'
                },
                {
                    title: 'Expertise',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    url: '#',
                    icon: 'fa-solid fa-graduation-cap'
                },
            ]
        };
    },
    components: { CardComponent, ButtonGreen }
}
</script>

<style lang="scss" >
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

.section3 {
    position: relative;
    background-color: $bg-footer;
    height: max-content;

    .container {
        height: 100%;
    }
}

.text-section3 {
    padding: 8rem 0;
    color: white;
    width: 50%;
    height: 100%;

    span {
        color: $txt-green;
        text-transform: uppercase;
        font-weight: 700;
    }

    h2 {
        margin-top: 2rem;
        font-size: 3rem;
        font-weight: 900;

        span {
            text-transform: none;
            color: $btn-green;
            background-color: #0583832f;
            padding: 0 1rem;
        }
    }

    p {
        margin-top: 2rem;
        width: 100%;

    }

    .cards-section3 {
        @include center('horizontal');
        padding: 3rem 0;
        flex-wrap: wrap;
        width: 100%;



        .my-card {
            padding: 0;
            background-color: $bg-footer;
            color: white;
            width: calc((100%) / 2);
            margin-left: 0;

            p {
                width: 100%;
            }

            span {
                color: $btn-green;
            }
        }

    }

    .my-flex {
        display: flex;

        button {
            padding: 0.5rem 1rem;
        }

        button:last-child {
            margin-left: 1rem;
            color: $btn-green;
            background-color: $bg-footer;
            border: 1px solid $btn-green;

        }
    }
}



.bg-img {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: white;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.svg-top,
.svg-bot {
    position: absolute;
    left: calc((100% - 200px) / 2);

    img {
        height: 100px;
        width: 200px;
        opacity: 0.2;
    }
}

.svg-top {
    top: -48px;

}

.svg-bot {
    bottom: -52px;
}
</style>