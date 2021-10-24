import {
  componentTagValidator,
  componentTagValidatorParams,
} from '../componentsValidatior'

describe('componentTagValidator', () => {
  it('Should return component name by index code', () => {
    const DEFAULT_TAG_INDEX = 'SimpleText'
    const DEFAULT_TAG_2_INDEX = 'LongText'
    const DEFAULT_TAG = 'p'
    const FRIENDLY_LIST_INDEX = 'FriendlyList'
    const FIND_MORE_INFO_LIST_COMPONENT_INDEX = 'FindMoreInfoList'

    expect(componentTagValidator(DEFAULT_TAG_INDEX)).toBe(DEFAULT_TAG)
    expect(componentTagValidator(DEFAULT_TAG_2_INDEX)).toBe(DEFAULT_TAG)
    expect(
      componentTagValidator('anystuff' as componentTagValidatorParams)
    ).toBe(DEFAULT_TAG)
    expect(componentTagValidator(FRIENDLY_LIST_INDEX)).toBe('FriendlyList')
    expect(componentTagValidator(FIND_MORE_INFO_LIST_COMPONENT_INDEX)).toBe(
      'FindMoreInfoList'
    )
  })
})
