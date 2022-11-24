<template>
    <section class="section6">
        <div class="container">

            <div class="container-left">
                <div class="text-section6">
                    <span>Send a message</span>
                    <h2>Get in <span>Touch</span></h2>
                    <p>We will respond to your message as soon as possible.</p>
                </div>
                <div class="form">
                    <input type="text" id="name" for="name" placeholder="Name">
                    <input type="email" id="email" for="email" placeholder="Email">
                    <input type="number" id="number" for="number" placeholder="Phone">
                    <select name="info" id="info">
                        <option selected value="0">---</option>
                        <option value="1">Sales and Purchasing</option>
                        <option value="2">Financial and Accounts</option>
                        <option value="3">Human Resource</option>
                        <option value="4">Another subjects</option>
                    </select>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <ButtonGreen :text="'Send'" />

                </div>

            </div>

            <div class="container-right">
                <h3>Example Inc.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <span><i class="fa-solid fa-phone"></i> +1 (305) 1234-5678</span>
                <span><i class="fa-solid fa-envelope"></i> hello@example.com</span>
                <span><i class="fa-solid fa-location-dot"></i> Main Avenue, 897</span>
                <ButtonGreen :text="'View Map'" />
            </div>

        </div>
    </section>
</template>

<script>
import { store } from '../../store.js';
import ButtonGreen from '../ComponentsGeneral/ButtonGreen.vue';
export default {
    name: "section6",
    data() {
        return {
            store
        };
    },
    components: { ButtonGreen }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

.section6 {
    background-color: white;
    height: max-content;

    .container {
        height: 100%;
        align-items: flex-start;

        .container-left {
            width: 65%;

            .form {
                @include center('horizontal');
                gap: 1rem;
                flex-wrap: wrap;
                padding-bottom: 8rem;

                #name,
                #email,
                #number,
                #info,
                textarea {
                    padding-left: 15px;
                    height: 50px;
                    width: calc((100% - 1rem) / 2);
                    background-color: $my-white;
                    border: none;
                    border-radius: 5px;
                }

                textarea {
                    margin-bottom: 2rem;
                    padding: 1rem;
                    width: 100%;
                    height: 200px;
                }



            }
        }

        .container-right {
            display: flex;
            flex-flow: column;
            padding-top: 8rem;
            padding-left: 3rem;
            height: 100%;
            width: 35%;

            h3 {
                margin-bottom: 2rem;
                font-weight: 700;
            }

            p {
                font-size: 1.2rem;
            }

            span {
                color: $btn-green;
                font-size: 1.2rem;
                margin: 1rem 0;

                i {
                    padding: 1rem;
                    border-radius: 50%;
                    background-color: $bg-span;
                }
            }

            button {
                margin-top: 2rem;
                width: 170px;
                color: $btn-green;
                border: 1px solid $btn-green;
                background-color: white;
            }

        }
    }
}


.text-section6 {
    padding: 8rem 0 4rem;
    width: 100%;
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
        font-size: 1.2rem;
        margin-top: 2rem;
        width: 100%;

    }
}
</style>