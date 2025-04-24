export interface ConversationLine {
  speaker: 'A' | 'B'
  text: string
}

export interface Exercise {
  id: string
  title: string
  conversation: ConversationLine[]
}
