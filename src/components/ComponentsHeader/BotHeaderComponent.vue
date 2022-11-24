<template>
    <div class="my-container2" :class="{ sticky: store.scrollPage }">
        <div class="container">
            <div class="logo">
                <img src="/svgs/svg-7.svg" alt="logo">
            </div>
            <div ref="navBar" class="my-navbar">
                <ListHorizontal :list="this.menuLink" />
                <ButtonGreen :text="'Buy NexGen'" />
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
                    url: '#',
                    icon: 'fa-solid fa-angle-down',
                    drop: [
                        {
                            text: 'Home',
                            url: '#'
                        },
                        {
                            text: 'Service',
                            url: '#'
                        },
                        {
                            text: 'About',
                            url: '#'
                        },
                        {
                            text: 'Project',
                            url: '#'
                        },
                        {
                            text: 'Result',
                            url: '#'
                        }
                    ]
                },
                {
                    text: 'Services',
                    url: '#',
                    icon: 'fa-solid fa-angle-down',
                    drop: [
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        }
                    ]
                },
                {
                    text: 'About',
                    url: '#',
                    icon: 'fa-solid fa-angle-down',
                    drop: [
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        }
                    ]
                },
                {
                    text: 'Projects',
                    url: '#',
                    icon: 'fa-solid fa-angle-down',
                    drop: [
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        }
                    ]
                },
                {
                    text: 'Result',
                    url: '#',
                    icon: 'fa-solid fa-angle-down',
                    drop: [
                        {
                            text: 'Home 1',
                            url: '#'
                        },
                        {
                            text: 'Home 1',
                            url: '#'
                        }
                    ]
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

        &:hover {
            .drop-down {
                display: flex !important;
            }
        }

        a {
            padding: 1rem 0;
            color: gray;
            text-decoration: none;
            text-transform: uppercase;
            font-size: $txt-md;
            // font-weight: 500;
        }

        span {
            margin-left: 5px;
            color: gray;
        }

        a:hover {
            color: #058283;

            span {
                color: #058283;
            }


        }

        .drop-down {
            display: none !important;
        }

    }

    button {
        font-weight: 500;
        margin-left: 2rem;
        background-color: #0583832f;
        color: $btn-green;
        border-radius: 20px;
        padding: 0.5rem 1rem;

    }
}

.sticky {
    background-image: linear-gradient(-45deg, #1b4965 0%, #0d1b2a 100%);
    z-index: 1000;
    position: fixed;
    top: 0;
    width: 100%;

    li {
        a {
            color: $txt-grey;

            span {
                color: $txt-grey;
            }

            &:hover {
                color: $txt-green;

                span {
                    color: $txt-green;
                }

            }
        }
    }

    button {
        background-color: rgba(219, 219, 219, 0.17);
        color: $txt-grey;
    }
}
</style>