import type { DeckMeta, Slide } from '../slides/types'

export const meta: DeckMeta = {
  title: 'Web Architecture Foundations',
  author: {
    name: 'Lirone Fitoussi',
    role: 'Full Stack | IT | DevOps | Automations',
    githubUrl: '#',
  },
}

export const slides: Slide[] = [
  {
    type: 'cover',
    title: 'Web Architecture Foundations',
  },
  {
    type: 'section',
    title: 'System Architecture Styles',
    intro: 'From monoliths to microservices',
  },
  {
    type: 'content',
    title: "What You'll Learn",
    bullets: [
      'How monolithic applications are structured',
      'Why teams move toward microservices',
      'Trade-offs between the two approaches',
    ],
  },
  {
    type: 'content',
    title: 'הארכיטקטורה המונוליטית (Monolithic)',
    body: 'בשלב הראשון של פיתוח אפליקציות ווב, כל הרכיבים היו מרוכזים יחד באפליקציה אחת גדולה. כל השירותים, הממשק, הלוגיקה ומסד הנתונים – כולם באותו קוד בסיסי.',
    bullets: [
      'כל השירותים חיים בתוך אפליקציה אחת.',
      'הקוד של ה-Frontend וה-Backend משולבים.',
      'מסד נתונים אחד לכל הרכיבים.',
    ],
  },
]
