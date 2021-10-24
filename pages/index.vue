<template>
  <section class="container-page">
    <header class="header">
      <h1 class="header--title tj-text-panel">Hello world, TJ</h1>
      <p>
        First of all, I'm glad you came. 😁😁 I hope you find a bunch of things
        useful for you here!
      </p>
    </header>
    <div class="content">
      <KeepReading
        v-for="keepReading in keepReadings"
        :key="keepReading.id"
        :keep-reading="keepReading"
      />
      <article
        v-for="content in contents"
        :key="content.id"
        class="content--item text-justify"
      >
        <h2
          class="content--item-title tj-text-title"
          :data-testid="content.id + '-title'"
        >
          {{ content.title }}
        </h2>
        <div
          v-for="body in content.body"
          :key="body.value"
          :data-testid="content.id + '-content'"
          class="content--item-text"
        >
          <p>{{ body.value }}</p>

          <component
            :is="componentName(body.type)"
            v-if="componentName(body.type) !== 'p'"
            :config="body"
            class="content--item-text"
          />
          <p v-else>{{ body.value }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import KeepReading from '@/components/Layouts/Blog/KeepReading/KeepReading.vue'
import FindMoreInfoList from '@/components/Layouts/Blog/FindMoreInfoList/FindMoreInfoList.vue'
import {
  componentTagValidator,
  componentTagValidatorParams,
} from '@/helpers/Blog/componentsValidatior/componentsValidatior'
import { contents, keepReadings } from '@/fakeDataBase/hello'

export default Vue.extend({
  name: 'Hello',
  components: {
    KeepReading,
    FindMoreInfoList,
  },
  layout: 'blog',
  data() {
    return {
      keepReadings,
      contents,
    }
  },
  methods: {
    componentName(type: componentTagValidatorParams) {
      return componentTagValidator(type)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~@/styles/layouts/blog/index.scss';

.content {
  &--divider {
    margin: $space-sm auto;
  }
}
</style>
