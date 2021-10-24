<template>
  <v-expansion-panel class="px-5 py-5 content-factory-item">
    <h3 class="title mb-4">Content scope</h3>
    <v-expansion-panel-header
      >{{ scopedContent.title || 'My new content' }}
    </v-expansion-panel-header>
    <v-expansion-panel-content class="content-factory-item__content">
      <Input
        v-model="scopedContent.title"
        label="Content title"
        placeholder="Define the content title"
        focus
      />
      <div>
        <div v-if="scopedContent.body.length">
          <div
            v-for="(body, bodyIndex) in scopedContent.body"
            :key="bodyIndex"
            class="content-factory-item__content-box my-10 px-5 py-5"
          >
            <Combobox
              v-model="body.type"
              :items="items"
              label="Define the content type"
              outlined
              dense
            />
            <component
              :is="body.type"
              v-if="body.type"
              :value="body.value"
              @updateValue="body.value = $event"
            />
          </div>
        </div>
        <div class="content-factory-item__actions my-7">
          <Btn color="secondary" @click="addNew()"> add type content</Btn>
          <Btn color="primary" @click="updateContent()"> Save content</Btn>
        </div>
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import Vue from 'vue'

import SimpleText from '@/components/Layouts/Admin/SimpleText/SimpleText.vue'
import LongText from '@/components/Layouts/Admin/LongText/LongText.vue'
import FriendlyList from '@/components/Layouts/Admin/FriendlyList/FriendlyList.vue'
import Btn from '@/components/AntiCorruption/Forms/Btn/Btn.vue'
import Combobox from '@/components/AntiCorruption/Forms/Combobox/Combobox.vue'
import Input from '@/components/AntiCorruption/Forms/Input/Input.vue'
import Card from '@/components/AntiCorruption/Cards/Card.vue'

import { Content } from '@/models/Admin/Factories/Content'
import { ContentBody } from '@/models/Admin/Factories/ContentBody'
import { ComponentsTags } from '~/enums/Blog/componentsTags'

// [{"body":[{"type":"SimpleText","value":"my "}],"title":"New"}]

export default Vue.extend({
  name: 'ContentFactoryItem',
  components: {
    SimpleText,
    LongText,
    Btn,
    Input,
    Combobox,
    FriendlyList,
    Card,
  },
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      scopedContent: {
        title: '',
        body: [],
      } as Content,
      items: [...Object.keys(ComponentsTags)],
    }
  },
  created() {
    if (this.content.title) {
      this.scopedContent = this.content
    }
  },
  methods: {
    addNew() {
      this.scopedContent.body.push({} as ContentBody)
    },
    updateContent() {
      this.$emit('update:content', this.scopedContent)
      this.$emit('update', this.scopedContent)
    },
  },
})
</script>

<style lang="scss" scoped>
.content-factory-item {
  &__content-box {
    border: 1px solid #eceff1;
    border-radius: 4px;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
