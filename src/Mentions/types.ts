import { MentionProps } from 'antd/es/mentions';

export interface ChaosMentionsProps extends MentionProps {
  options?: {
    label: string, value: string,
  }[]
}