<template>
  <div>
    <Input
      v-model="text"
      label="Type content"
      @input="$emit('updateValue', text)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Input from '@/components/AntiCorruption/Forms/Input/Input.vue'

export default Vue.extend({
  name: 'SimpleText',
  components: {
    Input,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      text: '',
    }
  },
  created() {
    this.text = this.value ?? this.text
  },
})
</script>
