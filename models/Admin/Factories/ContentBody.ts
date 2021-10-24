import { SimpleTextValue } from './SimpleTextValue'
import { TextareaValue } from './TextareaValue'

export interface ContentBody {
  type: 'SimpleText'
  valeu: SimpleTextValue | TextareaValue
}
