<template>
    <div class="my-container">
        <div class="container">
            <div class="timetable">
                <i class="fa-solid fa-clock"></i>
                <span> Open Hours: Mon-Sat-9:00-18:00</span>
            </div>

            <div class="contacts">
                <ul>
                    <li>
                        <i class="fa-solid fa-phone"></i><span> +1 (305) 1234-5678</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-envelope"></i> <span> hello@example.com</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'TopHeaderComponent'
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

.my-container {
    @include center();
    color: $txt-grey;
    background-color: $dark;
    height: 50px;
    width: 100%;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.contacts {
    @include center();

    ul {
        @include center();
        flex-flow: row;
        margin-bottom: 0;

        li {
            padding-left: 2rem;

            i {
                margin-right: 10px;
            }
        }
    }
}
</style>