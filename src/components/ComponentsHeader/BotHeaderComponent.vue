<template>
    <div class="my-container">
        <div class="container">
            <div class="logo">
                <img src="/svgs/svg-7.svg" alt="">
            </div>
            <div class="my-navbar">
                <ListComponent :list="this.menuLink" />
                <ButtonGreenComponent :text="'Get In Touch'" />
            </div>

        </div>
    </div>
</template>

<script>
import ButtonGreenComponent from '../ComponentsGeneral/ButtonGreenComponent.vue';
import ListComponent from '../ComponentsGeneral/ListComponent.vue';


export default {
    name: 'BotHeaderComponent',
    components: {
        ListComponent,
        ButtonGreenComponent
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

    li {
        padding-left: 2rem;

        a {
            color: $dark;
            text-decoration: none;
            text-transform: uppercase;
            font-size: $txt-md;
            // font-weight: 500;
        }
    }

    button {
        margin-left: 2rem;
    }
}
</style>