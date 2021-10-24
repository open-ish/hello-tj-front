<template>
  <div class="content-factory-group">
    <v-expansion-panels multiple>
      <ContentFactoryItem
        v-for="(content, index) in scopedContents"
        :key="index"
        multiple
        :content="content"
        @update:content="content = $event"
        @update="update($event, index)"
      />
      <!-- compponents type to create: PeriodList FriendlyList -->
    </v-expansion-panels>
    <Btn class="my-10 ml-auto" color="primary" @click="addNew">
      New content
    </Btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropOptions } from 'vue/types/options.d'

import ContentFactoryItem from '@/components/Layouts/Admin/ContentFactory/ContentFactoryItem.vue'
import Btn from '@/components/AntiCorruption/Forms/Btn/Btn.vue'
import { Content } from '~/models/Admin/Factories/Content'

export default Vue.extend({
  name: 'ContentFactoryGroup',
  components: {
    ContentFactoryItem,
    Btn,
  },
  props: {
    contents: {
      type: Array,
      default: () => [],
    } as PropOptions<Content[]>,
  },
  data() {
    return {
      scopedContents: [] as Content[],
    }
  },
  created() {
    this.scopedContents = this.contents.length ? this.contents : []
  },
  methods: {
    addNew() {
      this.scopedContents.push({} as Content)
    },
    update(newValue: Content, index: number) {
      this.scopedContents[index] = newValue
      this.$emit('update:contents', this.scopedContents)
    },
  },
})
</script>
<style lang="scss" scoped>
.content-factory-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
