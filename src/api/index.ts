import type { GenericAbortSignal } from 'axios'
import { post } from '@/utils/request'

export function fetchChatAPI<T = any>(
  prompt: string,
  options?: { conversationId?: string; parentMessageId?: string },
  signal?: GenericAbortSignal,
) {
  if(prompt === '切换图片模式') {
    prompt = '当你想发送一张照片时，请使用 markdown ，并且不要有反斜线，不要用代码块，使用 Unsplash API(https://source.unsplash.com/960x640/?<英语关键词>)，如果明白了，请回复”明白”'
  }
  return post<T>({
    url: '/chat',
    data: { prompt, options },
    signal,
  })
}

export function fetchChatConfig<T = any>() {
  return post<T>({
    url: '/config',
  })
}
