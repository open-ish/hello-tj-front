import { ComponentsTags } from '~/enums/Blog/componentsTags'

export type componentTagValidatorParams =
  | 'LongText'
  | 'SimpleText'
  | 'FriendlyList'
  | 'FindMoreInfoList'

export const componentTagValidator = (
  index: componentTagValidatorParams
): ComponentsTags | string => {
  const DEFAULT_TAG = 'p'
  return ComponentsTags[index] || DEFAULT_TAG
}
