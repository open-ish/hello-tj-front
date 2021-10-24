<template>
  <div class="period-list">
    <Timeline align-top dense class="period-list__config-items mb-5">
      <TimelineItem
        v-for="(item, index) in items"
        :key="index"
        :color="item.color"
        data-testid="period-list__item"
        small
      >
        <p v-html-safe="item.text" class="font-weight-normal" />
        <p class="tj-text-caption">{{ item.caption }}</p>
        <Icon @click="change(item, index)"> {{ 'mdi-pencil' }} </Icon>
      </TimelineItem>
    </Timeline>
    <div class="period-list__config">
      <Input
        v-model="text"
        :disabled="!hasSelected"
        label="Type main text"
        data-testid="period-list__input--text"
        @input="inputData('text', $event)"
      />
      <Input
        v-model="caption"
        :disabled="!hasSelected"
        label="Type caption"
        data-testid="period-list__input--caption"
        @input="inputData('caption', $event)"
      />
      <Btn
        class="period-list__config--new mb-4"
        color="secondary"
        @click="createNew"
      >
        Add new line
      </Btn>
      <v-color-picker
        v-model="color"
        :disabled="!hasSelected"
        hide-sliders
        hide-inputs
        class="ma-2"
        show-swatches
        data-testid="period-list__color-picker"
        @input="inputData('color', $event)"
      >
      </v-color-picker>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropOptions } from 'vue/types/options.d'

import Input from '@/components/AntiCorruption/Forms/Input/Input.vue'
import Btn from '@/components/AntiCorruption/Forms/Btn/Btn.vue'
import Icon from '@/components/AntiCorruption/Icon/Icon.vue'
import Timeline from '@/components/AntiCorruption/Timeline/Timeline.vue'
import TimelineItem from '@/components/AntiCorruption/Timeline/TimelineItem.vue'
import { PeriodListValue } from '@/models/Admin/Factories/PeriodListValue'

export default Vue.extend({
  name: 'PeriodList',
  components: {
    Input,
    Btn,
    Icon,
    TimelineItem,
    Timeline,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    } as PropOptions<PeriodListValue[]>,
  },
  data() {
    return {
      text: '',
      color: '',
      caption: '',
      items: [] as PeriodListValue[],
      currentItem: {},
      currentIndex: 0,
    }
  },
  computed: {
    hasSelected(): boolean {
      return !!(this.color && this.text)
    },
  },
  created() {
    this.items = this.value.length ? this.value : []
  },
  methods: {
    change(item: PeriodListValue, index: number) {
      this.color = item.color
      this.text = item.text
      this.caption = item.caption
      this.currentIndex = index
    },
    createNew() {
      const newItem = {
        text: 'my new',
        color: '#BDBDBDFF',
        caption: 'my caption',
      } as PeriodListValue
      this.items.push(newItem)
      this.color = newItem.color
      this.text = newItem.text
      this.caption = newItem.caption
      this.currentIndex = this.items.length - 1
    },
    inputData(type: 'color' | 'text' | 'caption', value: string) {
      if (!this.hasSelected) return
      const hasType = this.items?.[this.currentIndex]?.[type]
      if (!hasType) return
      this.items[this.currentIndex][type] = value
      this.updateValue()
    },
    updateValue() {
      this.$emit('updateValue', this.items)
    },
  },
})
</script>

<style lang="scss" scoped>
.period-list {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
