<template>
    <section class="section5">
        <div class="section5-top">
            <div class="container">
                <span>What are we doing</span>
                <h2><span>Result</span> in Numbers</h2>
                <ListHorizontal :list="links" />
            </div>
        </div>
        <div class="section5-bot">

        </div>

    </section>
</template>

<script>
import { store } from '../../store.js';
import ListHorizontal from '../ComponentsGeneral/ListHorizontal.vue';
export default {
    name: "section5",
    data() {
        return {
            store,
            links: [
                {
                    text: "Certification",
                    ulr: "#",
                    num: 128
                },
                {
                    text: "Employees",
                    ulr: "#",
                    num: 230
                },
                {
                    text: "Customers",
                    ulr: "#",
                    num: 517
                },
                {
                    text: "Countries Served",
                    ulr: "#",
                    num: 94
                }
            ]
        };
    },
    components: { ListHorizontal }
}
</script>

<style lang="scss" >
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

.section5 {
    width: 100%;
    height: 1100px;

    .section5-top {
        padding-top: 8rem;
        width: 100%;
        height: 600px;
        background-image: url('/images/bg-7.jpg');
        background-size: cover;
        background-position-y: -200px;
        background-repeat: no-repeat;

        .container {
            flex-flow: column;


            span {
                color: $txt-green;
                text-transform: uppercase;
                font-weight: 700;
            }

            h2 {
                color: white;
                margin-top: 2rem;
                font-size: 3rem;
                font-weight: 900;

                span {
                    font-weight: 900;
                    text-transform: none;
                    color: white;
                    background-color: #0583832f;
                    padding: 0 1rem;
                }
            }
        }

        ul {
            padding-top: 6rem;

            li {
                text-align: center;
                padding: 0 4rem;

                p {
                    font-size: 2rem;
                    font-weight: 600;
                    color: $txt-green;
                }

                a {
                    font-size: 1.2rem;
                    color: white;
                    font-weight: 600;
                }
            }
        }

    }

    .section5-bot {
        width: 100%;
        height: 300px;
        background-color: $bg-footer;
    }
}
</style>