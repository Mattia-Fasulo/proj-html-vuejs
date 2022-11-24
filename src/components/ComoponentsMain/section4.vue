<template>
    <section class="section4">
        <div class="container">
            <h2>Actions & <span>Projects</span></h2>
            <ListHorizontal :list="this.menuLink" />
            <div class="cards-section4">
                <CardImage :obj="this.cards" />
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../../store.js';
import CardImage from '../ComponentsGeneral/cardImage.vue';
import ListHorizontal from '../ComponentsGeneral/ListHorizontal.vue';


export default {
    name: "section4",
    data() {
        return {
            store,
            menuLink: [
                {
                    text: "All",
                    url: "#",
                    current: true
                },
                {
                    text: "Istitutional",
                    url: "#",
                    current: false
                },
                {
                    text: "Social",
                    url: "#",
                    current: false
                },
                {
                    text: "Events",
                    url: "#",
                    current: false
                },
                {
                    text: "Innovation",
                    url: "#",
                    current: false
                },
                {
                    text: "Environment",
                    url: "#",
                    current: false
                },
                {
                    text: "Technology",
                    url: "#",
                    current: false
                }
            ],
            cards: [
                {
                    text: "Academic professional program in social media",
                    url: "/images/project-1.jpg",
                },
                {
                    text: "President's speech at the annual meeting",
                    url: "/images/project-2.jpg",
                },
                {
                    text: "International business trip in Shanghai",
                    url: "/images/project-3.jpg",
                },
                {
                    text: "Techonology workshop with education theme",
                    url: "/images/project-4.jpg",
                },
                {
                    text: "Donation of clothes and food to the partener NGO",
                    url: "/images/project-5.jpg",
                },
                {
                    text: "Confraternization of the procurement team",
                    url: "/images/project-6.jpg",
                },

            ]
        };
    },
    components: { ListHorizontal, CardImage }
}
</script>

<style lang="scss">
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

.section4 {
    width: 100%;
    height: max-content;
    background-color: white;
    padding: 10rem 0;

    .container {
        flex-flow: column;

        h2 {
            margin-top: 2rem;
            font-size: 4rem;
            font-weight: 900;

            span {
                font-weight: 900;
                text-transform: none;
                color: $btn-green;
                background-color: $bg-span;
                padding: 0 1rem;
            }
        }

        ul {
            padding: 4rem;

            li {
                a {
                    color: $txt-d-grey;
                    padding: 0 1.5rem;
                    font-size: 1.2rem;
                    text-transform: uppercase;

                    &:hover {
                        color: $btn-green;
                    }

                    &.active {
                        padding: 5px 10px;
                        background-color: #26aeae43;
                    }
                }
            }
        }
    }

    .cards-section4 {
        @include center();
        flex-wrap: wrap;
        gap: 2rem;
        height: max-content;
        width: 100%;


        .card-image {

            .over {
                cursor: pointer;

                span {
                    transition: all 0.5s ease-in-out;
                }

                p {

                    transition: all 0.5s ease-in-out;
                }

                .icons {
                    transition: all 0.5s ease-in-out;

                }

                &:hover {
                    background-color: rgba(0, 0, 0, 0.57);
                }



                &:hover p {
                    margin-bottom: 10px;
                }

                &:hover .icons {
                    display: block;
                    margin-top: 80px;
                }
            }


        }


    }
}
</style>