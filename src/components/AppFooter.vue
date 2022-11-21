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
                    <ButtonGreen :text="'Get In Touch'" />
                </div>
                <div class="footer-list">
                    <ListVertical :title="titleMenuOne" :list="linkMenuOne" />
                </div>
                <div class="footer-list">
                    <ListVertical :title="titleMenuTwo" :list="linkMenuTwo" />
                </div>
                <div class="footer-list">
                    <ListVertical :title="titleMenuThree" :list="linkMenuThree" />
                </div>

            </div>
        </div>
    </footer>
</template>

<script>
import ButtonGreen from './ComponentsGeneral/ButtonGreen.vue';
import ListVertical from './ComponentsGeneral/ListVertical.vue';

export default {
    name: 'AppFooter',
    components: {
        ButtonGreen,
        ListVertical
    },
    data() {
        return {
            titleMenuOne: 'About',
            linkMenuOne: [
                {
                    text: 'The Company',
                    url: '#'
                },
                {
                    text: 'Instituzional',
                    url: '#'
                },
                {
                    text: 'Social & Events',
                    url: '#'
                },
                {
                    text: 'Innovation',
                    url: '#'
                },
                {
                    text: 'Environment',
                    url: '#'
                },
                {
                    text: 'Technology',
                    url: '#'
                }
            ],
            titleMenuTwo: 'Services',
            linkMenuTwo: [
                {
                    text: 'Audite & Assurance',
                    url: '#'
                },
                {
                    text: 'Financial Advisory',
                    url: '#'
                },
                {
                    text: 'Analytics M&A',
                    url: '#'
                },
                {
                    text: 'Middle Marketing',
                    url: '#'
                },
                {
                    text: 'Legal Consulting',
                    url: '#'
                },
                {
                    text: 'Regulatory Risk',
                    url: '#'
                }
            ],
            titleMenuThree: 'Support',
            linkMenuThree: [
                {
                    text: 'Responsibility',
                    url: '#'
                },
                {
                    text: 'Terms of Use',
                    url: '#'
                },
                {
                    text: 'About Cookies',
                    url: '#'
                },
                {
                    text: 'Privacy Policy',
                    url: '#'
                },
                {
                    text: 'Accesibility',
                    url: '#'
                },
                {
                    text: 'Information',
                    url: '#'
                }
            ]
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
    background-color: $bg-footer;
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
    background-color: $bg-list-footer;
    border-radius: 5px;

    &:first-child {
        padding: 0;
        background-color: $bg-footer;
    }

    img {
        width: 150px;
    }

    p {
        padding: 1.5rem 0 1rem;
        margin-bottom: 0;
    }

    span {
        padding: 0.5rem 0;

        i {
            margin-right: 10px;
        }
    }

    button {
        margin-top: 1.5rem;
        width: max-content;
        border: 1px solid $btn-green;
        background-color: $bg-footer;
    }

}

ul {
    h3 {
        color: white;

    }

    li {
        a {
            color: $txt-grey;
        }

        a:hover {
            color: white;
        }
    }
}
</style>