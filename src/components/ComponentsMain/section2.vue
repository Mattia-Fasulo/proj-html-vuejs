<template>
    <section class="section2">
        <div class="container">
            <div class="text-section2">
                <h2>Excellence in <span>Service</span></h2>
                <div class="my-flex">
                    <p>We are leaders in providing consultancy service with a set of cutting-edge technoligies and a
                        team of
                        experienced and renawned professionals. There are some option that you can hire.</p>
                    <ButtonGreen :text="'See All'" />
                </div>
            </div>

            <div class="cards-section2">
                <CardComponent :obj="store.linkMenuTwo" />
            </div>

        </div>

    </section>
</template>

<script>
import ButtonGreen from '../ComponentsGeneral/ButtonGreen.vue';
import CardComponent from '../ComponentsGeneral/CardComponent.vue';

import { store } from '../../store.js';

export default {
    name: "section2",
    components: { ButtonGreen, CardComponent },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss">
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;


.section2 {
    width: 100%;
    height: max-content;
    background-color: rgba(128, 128, 128, 0.122);

    .container {
        display: block;
        padding: 7rem 0;

        .cards-section2 {
            @include center();
            flex-wrap: wrap;
            padding: 3rem 0;
            width: 100%;
            gap: 1.5rem;

            .my-card {
                cursor: pointer;


                p {
                    color: $txt-d-grey;
                    width: 100%;
                }

                i {
                    color: $btn-green;
                    border-radius: 50%;
                    padding: 10px;
                    cursor: pointer;
                    transition: all 1s ease-out;
                }

                &:hover i {
                    background-color: #26aeae4c;
                    border-radius: 50%;
                }

                &:hover {
                    transform: translateY(-10px);

                }
            }
        }
    }
}

.text-section2 {


    h2 {
        margin-top: 2rem;
        font-size: 3rem;
        font-weight: 900;

        span {
            text-transform: none;
            color: $btn-green;
            background-color: $bg-span;
            padding: 0 1rem;
        }
    }

    p {
        margin-top: 2rem;
        width: 75%;

    }

    .my-flex {
        display: flex;
        justify-content: space-between;

        p {
            color: $txt-d-grey;
        }

        button {
            align-self: flex-end;
            margin-bottom: 1.4rem;
        }
    }





}
</style>