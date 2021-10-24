<template>
  <header role="banner">
    <VNavigationDrawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <VList>
        <VListItem
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          router
          exact
        >
          <VListItemAction>
            <VIcon>{{ item.icon }}</VIcon>
          </VListItemAction>
          <VListItemContent color="primary">
            <VListItemTitle v-text="item.title" />
          </VListItemContent>
        </VListItem>
      </VList>
    </VNavigationDrawer>

    <VAppBar :clipped-left="clipped" fixed app>
      <VAppBarNavIcon @click.stop="drawer = !drawer" />
      <VSpacer />
      <VToolbarTitle v-text="title" />
    </VAppBar>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BlogHeader',
  data() {
    return {
      clipped: false,
      drawer: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/admin',
        },
        {
          icon: 'mdi-clipboard-account',
          title: 'About me page',
          to: '/admin/about',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Hello TJ - admin',
    }
  },
})
</script>
