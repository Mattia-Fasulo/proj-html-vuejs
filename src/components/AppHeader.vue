<template>
    <TopHeaderComponent />
    <BotHeaderComponent />
</template>

<script>
import TopHeaderComponent from './ComponentsHeader/TopHeaderComponent.vue';
import BotHeaderComponent from './ComponentsHeader/BotHeaderComponent.vue';

export default {
    name: 'AppHeader',
    components: {
        TopHeaderComponent,
        BotHeaderComponent
    }
}
</script>

<style lang="scss" scoped>

</style>