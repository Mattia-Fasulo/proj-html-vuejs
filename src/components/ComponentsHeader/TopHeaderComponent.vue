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
    background-color: transparent;
    background-image: linear-gradient(-45deg, #1b4965 0%, #0d1b2a 100%);
    height: 50px;
    width: 100%;
}


.timetable {
    span {
        cursor: pointer;
    }

    &:hover {
        color: $btn-green;
    }
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
            cursor: pointer;
            padding-left: 2rem;

            i {
                cursor: pointer;
                margin-right: 10px;

                &:hover {
                    color: $btn-green;
                }
            }

            &:hover {
                color: $btn-green;
            }


        }
    }
}
</style>