<template>
    <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
    </main>
</template>

<script>
import Section1 from './ComoponentsMain/section1.vue';
import Section2 from './ComoponentsMain/section2.vue';
import Section3 from './ComoponentsMain/section3.vue';
import Section4 from './ComoponentsMain/section4.vue';
import Section5 from './ComoponentsMain/section5.vue';
import Section6 from './ComoponentsMain/section6.vue';

export default {
    name: "AppMain",
    components: {
        Section1,
        Section2,
        Section3,
        Section4,
        Section5,
        Section6
    }
}
</script>

<style lang="scss" scoped>

</style>