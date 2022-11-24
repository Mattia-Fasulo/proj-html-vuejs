<template>
    <div class="list-horizontal">
        <ul>
            <h3 v-if="title">{{ title }}</h3>
            <li v-for="(link, index) in list" :key="index">
                <img v-if="link.img" :src="link.img" :alt="'logo' + index">
                <p v-if="link.num">{{ link.num }}</p>
                <a @click.prevent="this.setLink(link.id)" v-if="link.text" :href="link.url"
                    :class="{ active: link.id === activeLink }">{{ link.text }} <span v-if="link.icon"
                        :class="link.icon"></span> </a>
                <ul v-if="link.drop" class="drop-down">
                    <li v-for="(link, index) in link.drop"><a href="">{{ link.text }}</a></li>
                </ul>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'ListHorizontal',
    props: {
        title: [],
        list: {}
    },
    data() {
        return {
            activeLink: 0
        }
    },
    methods: {
        setLink(id) {
            // this.activeLink = this.list.findIndex((item) => id === item.id);
            if (id === undefined) {
                return
            }
            this.activeLink = id;


        }
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
@use '../../assets/styles/partials/mixins' as *;

.list-horizontal {

    ul {
        @include center();
        margin-bottom: 0;
        padding-left: 0;

        li {
            position: relative;
        }

        ul {
            padding: 0.5rem 0;
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            position: absolute;
            top: 45px;
            left: 20px;
            width: max-content;
            background-color: white;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            li {

                color: $txt-d-grey;
                font-size: 1.2rem;
                padding: 0.5rem 3rem 0.5rem 1rem;
                border-left: 8px solid $txt-grey;

                &:hover {
                    border-left: 8px solid $btn-green;
                }

                a {
                    text-transform: none;
                    color: $txt-d-grey;

                    &:hover {
                        color: $btn-green;
                    }
                }
            }
        }
    }
}
</style>