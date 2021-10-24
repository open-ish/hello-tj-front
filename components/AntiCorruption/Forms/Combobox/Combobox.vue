<template>
  <VCombobox v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VCombobox>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Combobox',
})
</script>
