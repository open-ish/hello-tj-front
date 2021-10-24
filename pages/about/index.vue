<template>
  <section class="container-page">
    <div v-if="contents.length">
      <header class="header">
        <h1 class="header--title tj-text-panel">{{ title }}</h1>
        <p>{{ intro }}</p>
      </header>
      <div class="content text-justify">
        <article
          v-for="content in contents"
          :key="content.id"
          class="content--item"
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
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import FriendlyList from '@/components/Layouts/Blog/FriendlyList/FriendlyList.vue'
import PeriodList from '@/components/Layouts/Blog/PeriodList/PeriodList.vue'
import {
  componentTagValidator,
  componentTagValidatorParams,
} from '@/helpers/Blog/componentsValidatior/componentsValidatior'
import aboutApi from '@/services/Blog/about/about.service'
import { combinedVueInstanceWorkAround } from '~/helpers/work-around/combinedVueInstanceWorkAround'

export default Vue.extend({
  name: 'About',
  components: {
    FriendlyList,
    PeriodList,
  },
  layout: 'blog',
  async asyncData() {
    const { contents, title, intro } = await aboutApi.index()

    return {
      contents,
      title,
      intro,
    }
  },
  head() {
    return { title: combinedVueInstanceWorkAround(this).title + ' -' }
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

.friendly-list {
  &--itens {
    display: flex;
    flex-wrap: wrap;
  }

  &--item:not(:last-of-type) {
    margin-right: $space-xs;
    margin-bottom: $space-xs;
  }
}
</style>
