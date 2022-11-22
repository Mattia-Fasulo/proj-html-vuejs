<template>
    <section class="section1">
        <div class="jumbotron">
        </div>
        <div class="text-jumbo">
            <h1>Ready <span>Team</span></h1>
            <p>No matter what your company needs, we will be ready to assist you in the best possible way.</p>
            <div class="btn-jumbo">
                <ButtonGreen :text="'Get In Touch'" />
                <ButtonGreen :text="'Read More'" />
            </div>
        </div>

    </section>
</template>

<script>
import ButtonGreen from '../ComponentsGeneral/ButtonGreen.vue';

export default {
    name: "section1",
    components: { ButtonGreen }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

.section1 {
    @include center();
    position: relative;
    width: 100%;
    height: 665px;

    .text-jumbo {
        @include center ();
        flex-flow: column;
        padding: 2rem;
        width: 600px;
        text-align: center;

        h1 {
            font-size: 4rem;
            font-weight: 900;

            span {
                background-color: #0583832f;
                padding: 0 1rem;
                color: $btn-green;
            }
        }

        p {
            color: $dark;
            width: 400px;
            margin-top: 2rem;
        }

        .btn-jumbo {
            margin-top: 2rem;

            button {
                font-size: 1rem;
                padding: 0.5rem 1rem;
            }
        }

        button:last-child {
            background-color: white;
            color: $btn-green;
            border: 1px solid $btn-green;
            margin-left: 1.5rem;
        }
    }


}

.jumbotron {
    z-index: 1000;
    position: absolute;
    top: -35px;
    height: 700px;
    width: 100%;
    background-image: url('/images/bg-parallax.png');
    background-position: center;
    background-position-y: -180px;
}
</style>