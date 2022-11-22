<template>
    <div class="my-container">
        <div class="container">
            <div class="logo">
                <img src="/svgs/svg-7.svg" alt="logo">
            </div>
            <div class="my-navbar">
                <ListHorizontal :list="this.menuLink" />
                <ButtonGreen :text="'Get In Touch'" />
            </div>

        </div>
    </div>
</template>

<script>
import ButtonGreen from '../ComponentsGeneral/ButtonGreen.vue';
import ListHorizontal from '../ComponentsGeneral/ListHorizontal.vue';


export default {
    name: 'BotHeaderComponent',
    components: {
        ListHorizontal,
        ButtonGreen
    },
    data() {
        return {
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
    }
}
</script>

<style lang="scss" >
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

.my-container {
    @include center();
    color: $dark;
    height: 100px;
    width: 100%;

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
            color: $dark;
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
</style>