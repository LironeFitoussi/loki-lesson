export type DeckMeta = {
  title: string
  author: {
    name: string
    role: string
    githubUrl?: string
  }
  topicLogoSrc?: string
}

export type CoverSlide = {
  type: 'cover'
  title: string
}

export type SectionSlide = {
  type: 'section'
  title: string
  intro?: string
}

export type ContentSlide = {
  type: 'content'
  title: string
  html: string
  code?: {
    language: string
    content: string
  }
}

export type Slide = CoverSlide | SectionSlide | ContentSlide
