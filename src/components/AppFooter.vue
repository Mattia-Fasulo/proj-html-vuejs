<template>
    <footer>
        <div class="container">
            <div class="my-row">
                <div class="footer-list">
                    <img src="/svgs/svg-7.svg" alt="logo">
                    <p>A Functional HTML for Corporate & Business</p>
                    <span><i class="fa-solid fa-phone"></i> +1 (305) 1234-5678</span>
                    <span><i class="fa-solid fa-envelope"></i> hello@example.com</span>
                    <span><i class="fa-solid fa-location-dot"></i> Main Avenue, 897</span>
                    <ButtonGreen :text="'Buy NexGen'" />
                </div>
                <div class="footer-list">
                    <ListVertical :title="store.titleMenuOne" :list="store.linkMenuOne" />
                </div>
                <div class="footer-list">
                    <ListVertical :title="store.titleMenuTwo" :list="store.linkMenuTwo" />
                </div>
                <div class="footer-list">
                    <ListVertical :title="store.titleMenuThree" :list="store.linkMenuThree" />
                </div>

            </div>
        </div>
    </footer>
</template>

<script>
import ButtonGreen from './ComponentsGeneral/ButtonGreen.vue';
import ListVertical from './ComponentsGeneral/ListVertical.vue';

import { store } from '../store';

export default {
    name: 'AppFooter',
    components: {
        ButtonGreen,
        ListVertical
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" >
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

footer {
    @include center();
    color: $txt-grey;
    width: 100%;
    height: 500px;
    background-color: transparent;
    background-image: linear-gradient(-45deg, #1b4965 0%, #0d1b2a 100%);
}

.my-row {
    @include center();
    width: 100%;
    gap: 30px;
}

.footer-list {
    padding: 2rem;
    display: flex;
    flex-flow: column;
    width: calc((100% / 4));
    height: 330px;
    background-color: rgba(0, 0, 0, 0.153);
    // background-image: linear-gradient(-95deg, #1b49659e 20%, #0d1b2a79 100%);
    border-radius: 5px;

    &:first-child {
        padding: 0;
        background-color: transparent;
        background-image: none;
    }

    img {
        width: 150px;
    }

    p {
        padding: 1.5rem 0 1rem;
        margin-bottom: 0;
        color: $txt-grey;
    }

    span {
        padding: 0.5rem 0;
        color: $txt-grey;

        i {
            color: $txt-grey;
            margin-right: 10px;
        }
    }

    button {
        color: $txt-grey;
        margin-top: 1.5rem;
        width: max-content;
        border: 1px solid $btn-green;
        background-color: transparent;
        border-radius: 25px;

    }

}

ul {
    h3 {
        color: white;

    }

    li {
        color: $txt-grey;

        a {
            color: $txt-grey;

        }

        a:hover {
            color: white;
        }
    }
}
</style>