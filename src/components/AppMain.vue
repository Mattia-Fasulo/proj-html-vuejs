<template>
    <main>
        <Section1 />
        <Section2 />
    </main>
</template>

<script>
import Section1 from './ComoponentsMain/section1.vue';
import Section2 from './ComoponentsMain/section2.vue';

export default {
    name: "AppMain",
    components: {
        Section1,
        Section2
    }
}
</script>

<style lang="scss" scoped>

</style>