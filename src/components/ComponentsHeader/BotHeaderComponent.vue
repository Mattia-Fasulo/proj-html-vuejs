<template>
    <div class="my-container2" :class="{ sticky: store.scrollPage }">
        <div class="container">
            <div class="logo">
                <img src="/svgs/svg-7.svg" alt="logo">
            </div>
            <div ref="navBar" class="my-navbar">
                <ListHorizontal :list="this.menuLink" />
                <ButtonGreen :text="'Get In Touch'" />
            </div>

        </div>
    </div>
</template>

<script>
import ButtonGreen from '../ComponentsGeneral/ButtonGreen.vue';
import ListHorizontal from '../ComponentsGeneral/ListHorizontal.vue';
// import debounce from 'lodash.debounce';

import { store } from '../../store.js';



export default {
    name: 'BotHeaderComponent',
    components: {
        ListHorizontal,
        ButtonGreen
    },
    data() {
        return {
            store,
            scrollPage: false,
            menuLink: [
                {
                    text: 'Home',
                    url: '#'
                },
                {
                    text: 'Services',
                    url: '#'
                },
                {
                    text: 'About',
                    url: '#'
                },
                {
                    text: 'Projects',
                    url: '#'
                },
                {
                    text: 'Result',
                    url: '#'
                }
            ]
        }
    },
    methods: {

    },
    created() {

        window.addEventListener('scroll', function (e) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                store.scrollPage = true;
                console.log(store.scrollPage)
            }
            else {
                store.scrollPage = false;
            }
        });
    },




}
</script>

<style lang="scss" >
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

.my-container2 {
    @include center();
    position: fixed;
    top: 50px;
    z-index: 100;
    color: $dark;
    height: 80px;
    width: 100%;
    transition: all 0.15s ease-out 0s !important;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    height: 100%;

    img {
        width: 150px;
    }
}

.my-navbar {
    @include center();

    ul {
        flex-flow: row;
    }

    li {
        padding-left: 2rem;

        a {
            color: $txt-grey;
            text-decoration: none;
            text-transform: uppercase;
            font-size: $txt-md;
            // font-weight: 500;
        }

        a:hover {
            color: black;
        }
    }

    button {
        margin-left: 2rem;
    }
}

.sticky {
    background-image: linear-gradient(-45deg, #1b4965 0%, #0d1b2a 100%);
    z-index: 1000;
    position: fixed;
    top: 0;
    width: 100%;
}
</style>