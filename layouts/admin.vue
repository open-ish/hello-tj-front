<template>
  <VApp>
    <VContainer>
      <Header />
      <VMain>
        <Nuxt />
      </VMain>
    </VContainer>
    <Footer />
  </VApp>
</template>

<script>
import Header from '../components/Layouts/Admin/Header/Header.vue'

export default {
  components: {
    Header,
  },
  layout: 'admin',
  beforeCreate() {
    this.$vuetify.theme.dark = false
  },
}
</script>

<style lang="scss">
@import '~@/styles/layouts/blog/index.scss';
</style>
