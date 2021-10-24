import { Wrapper } from '@vue/test-utils'
import FriendlyList from '../FriendlyList.vue'
import { testSetup } from '~/anti-corruption/vue-test-utils'
import { FriendlyListValue } from '~/models/Admin/Factories/FriendlyListValue'

const TESTIDS = {
  chip: '[data-testid="friendly-list__item"]',
  input: '[data-testid="friendly-list__input"]',
  colorPicker: '[data-testid="friendly-list__color-picker"]',
}

const MOCK: FriendlyListValue[] = [
  {
    text: 'HTML',
    color: 'color',
  },
  {
    text: 'CSS',
    color: 'color2',
  },
]

describe('FriendlyList', () => {
  let wrapper: Wrapper<any>
  beforeEach(() => {
    wrapper = testSetup(FriendlyList, {}, true)
  })

  it('Should render empty state', () => {
    const chip = wrapper.findAll(TESTIDS.chip)
    const input = wrapper.find(TESTIDS.input)
    const colorPicker = wrapper.find(TESTIDS.colorPicker)
    expect(chip.length).toBe(0)
    expect(input.attributes().disabled).toBeTruthy()
    expect(colorPicker.attributes().disabled).toBeTruthy()
  })

  it('Should create first chip', async () => {
    expect(wrapper.vm.items.length).toBe(0)
    expect(wrapper.vm.color).toBe('')
    expect(wrapper.vm.text).toBe('')
    wrapper.vm.createNew()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.items.length).toBe(1)
    expect(wrapper.vm.currentIndex).toBe(0)
    expect(wrapper.vm.color).not.toBe('')
    expect(wrapper.vm.text).not.toBe('')

    const chip = wrapper.findAll(TESTIDS.chip)
    const input = wrapper.find(TESTIDS.input)
    const colorPicker = wrapper.find(TESTIDS.colorPicker)
    expect(chip.length).toBe(1)
    expect(input.attributes().disabled).toBeUndefined()
    expect(colorPicker.attributes().disabled).toBeUndefined()
  })

  it('Should change state', async () => {
    wrapper.vm.updateValue = jest.fn()
    wrapper.vm.inputColor('new color')
    expect(() => wrapper.vm.items[1].color).toThrowError()
    wrapper.vm.inputText('jest')
    expect(() => wrapper.vm.items[1].text).toThrowError()
    expect(wrapper.vm.updateValue).not.toBeCalled()

    wrapper.vm.items = MOCK
    wrapper.vm.change(MOCK[1], 1)
    expect(wrapper.vm.color).toBe(MOCK[1].color)
    expect(wrapper.vm.text).toBe(MOCK[1].text)
    expect(wrapper.vm.currentIndex).toBe(1)

    wrapper.vm.inputColor('new color')
    expect(wrapper.vm.items[1].color).toBe('new color')

    wrapper.vm.inputText('jest')
    expect(wrapper.vm.items[1].text).toBe('jest')
    expect(wrapper.vm.updateValue).toBeCalledTimes(2)
  })
})
