<template>
  <VTextarea
    filled
    persistent-placeholder
    v-bind="{ ...$props, ...$attrs }"
    :value="value"
    @input="update"
    v-on="$listeners"
  >
  </VTextarea>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TextArea',
  props: ['value'],
  methods: {
    update(newValue: string | number) {
      this.$emit('input', newValue)
    },
  },
})
</script>
