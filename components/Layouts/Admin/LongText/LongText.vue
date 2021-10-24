<template>
  <div>
    <TextArea
      v-model="text"
      label="Type content"
      @input="$emit('updateValue', text)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TextArea from '@/components/AntiCorruption/Forms/TextArea/TextArea.vue'

export default Vue.extend({
  name: 'LongText',
  components: {
    TextArea,
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
