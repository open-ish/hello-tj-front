<template>
  <section class="px-6 py-10">
    <div>
      <h1 class="display-2 mb-8">{{ page.title }} page - Edit</h1>
    </div>
    <article class="py-5">
      <h2 class="headline mb-4">{{ page.title }}</h2>
      <Input
        v-model="page.title"
        label="Page title *"
        placeholder="My amazing page title"
      />

      <Input
        v-model="page.intro"
        label="Short introduction"
        placeholder="My amazing page short introduction"
      />
    </article>

    <article>
      <h2 class="headline mb-4">Contents</h2>
      <ContentFactoryGroup :contents.sync="page.contents" />
    </article>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import Input from '@/components/AntiCorruption/Forms/Input/Input.vue'
import aboutApi from '@/services/Admin/about/about.admin.service'
import ContentFactoryGroup from '@/components/Layouts/Admin/ContentFactory/ContentFactoryGroup.vue'

export default Vue.extend({
  name: 'AdminAbout',
  components: {
    Input,
    ContentFactoryGroup,
  },
  layout: 'admin',
  async asyncData() {
    const page = await aboutApi.index()
    return {
      page,
    }
  },
  data() {
    return {
      page: null,
    }
  },
  methods: {
    // addNew() {
    //   this.panels.push({})
    // },
    // update(newValue, index) {
    //   this.panels[index] = newValue
    // },
  },
})
</script>

<style lang="scss" scoped></style>
