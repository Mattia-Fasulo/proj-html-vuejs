<template>
    <section class="section4">
        <div class="container">
            <h2>Actions & <span>Projects</span></h2>
            <ListHorizontal :list="store.linkMenuSection4" />
            <div class="cards-section4">
                <CardImage :obj="findCard" />
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
            searchClass: 1,


        };
    },
    components: {
        ListHorizontal,
        CardImage
    },
    methods: {

    },
    computed: {
        findCard() {
            return store.cardsSection4.filter((item) => {
                const card = item.categ;
                return card.includes(store.searchClass);
            })
        }
    }

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
                    padding: 5px 10px;
                    margin: 0 1.5rem;
                    font-size: 1.2rem;
                    text-transform: uppercase;

                    &:hover {
                        color: $btn-green;
                    }

                    &.active {
                        padding: 5px 10px;
                        background-color: $bg-span;
                    }
                }
            }
        }
    }

    .cards-section4 {
        @include center();
        justify-content: flex-start;
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