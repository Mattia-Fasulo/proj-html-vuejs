<template>
  <AppHeaderVue />
  <AppMain />
  <AppFooter />
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeaderVue from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  component: {
    AppHeaderVue,
  },
  components: {
    AppHeaderVue,
    AppMain,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>

</style>