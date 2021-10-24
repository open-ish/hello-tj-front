<template>
  <div class="friendly-list">
    <div class="friendly-list__config">
      <ChipGroup column class="friendly-list__config-items mb-5">
        <Chip
          v-for="(item, index) in items"
          :key="index"
          :color="item.color"
          data-testid="friendly-list__item"
          @click="change(item, index)"
          >{{ item.text }}
        </Chip>
      </ChipGroup>
      <Btn
        class="friendly-list__config--new mb-4"
        color="secondary"
        @click="createNew"
      >
        Add new
      </Btn>
      <Input
        v-model="text"
        :disabled="!hasSelected"
        label="Type content"
        data-testid="friendly-list__input"
        @input="inputText($event)"
      />
    </div>
    <v-color-picker
      v-model="color"
      :disabled="!hasSelected"
      hide-sliders
      hide-inputs
      class="ma-2"
      show-swatches
      data-testid="friendly-list__color-picker"
      @input="inputColor($event)"
    >
    </v-color-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropOptions } from 'vue/types/options.d'

import Input from '@/components/AntiCorruption/Forms/Input/Input.vue'
import Btn from '@/components/AntiCorruption/Forms/Btn/Btn.vue'
import Chip from '@/components/AntiCorruption/Chip/Chip.vue'
import ChipGroup from '@/components/AntiCorruption/Chip/ChipGroup.vue'
import { FriendlyListValue } from '@/models/Admin/Factories/FriendlyListValue'

export default Vue.extend({
  name: 'FriendlyList',
  components: {
    Input,
    Chip,
    Btn,
    ChipGroup,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    } as PropOptions<FriendlyListValue[]>,
  },
  data() {
    return {
      text: '',
      color: '',
      items: [] as FriendlyListValue[],
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
    change(item: FriendlyListValue, index: number) {
      this.color = item.color
      this.text = item.text
      this.currentIndex = index
    },
    createNew() {
      const newItem = {
        text: 'my new',
        color: '#BDBDBDFF',
      } as FriendlyListValue
      this.items.push(newItem)
      this.color = newItem.color
      this.text = newItem.text
      this.currentIndex = this.items.length - 1
    },
    inputColor(value: string) {
      if (!this.hasSelected) return
      if (!this.items?.[this.currentIndex]?.color) return
      this.items[this.currentIndex].color = value
      this.updateValue()
    },
    inputText(value: string) {
      if (!this.hasSelected) return
      if (!this.items?.[this.currentIndex]?.text) return
      this.items[this.currentIndex].text = value
      this.updateValue()
    },
    updateValue() {
      this.$emit('updateValue', this.items)
    },
  },
})
</script>

<style lang="scss" scoped>
.friendly-list {
  display: flex;
  align-items: center;
  align-items: flex-start;

  &__config {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__config--new {
    align-self: center;
  }
}
</style>
