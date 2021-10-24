import {
  mount,
  shallowMount,
  createLocalVue,
  ThisTypedMountOptions,
  VueClass,
} from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueHtmlSecure from 'vue-html-secure'

const localVue = createLocalVue()
Vue.use(Vuetify)
localVue.use(VueHtmlSecure)

const defaultProperties = () => {
  return {
    localVue,
    vuetify: new Vuetify(),
  }
}

export function testSetup(
  component: VueClass<Vue>,
  customConfig?: ThisTypedMountOptions<Vue>,
  shallow = false
) {
  return shallow
    ? shallowMount(component, {
        ...defaultProperties(),
        ...customConfig,
      })
    : mount(component, {
        ...defaultProperties(),
        ...customConfig,
      })
}
