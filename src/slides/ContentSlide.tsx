import type { ContentSlide as ContentSlideData, DeckMeta } from './types'
import { resolveDir } from './rtl'
import { SlideShell, IitcLogo, BrandFooter, TopicLogoBadge } from './SlideShell'
import './ContentSlide.css'

export function ContentSlide({ slide, meta }: { slide: ContentSlideData; meta: DeckMeta }) {
  const dir = resolveDir(slide.title, slide.body, ...(slide.bullets ?? []))
  return (
    <SlideShell dir={dir} className="content-slide">
      <div className="content-slide__pill">{slide.title}</div>
      <div className="content-slide__body">
        {slide.bullets && (
          <ul>
            {slide.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        {slide.body && <p>{slide.body}</p>}
      </div>
      <IitcLogo />
      <BrandFooter author={meta.author} />
      <div className="content-slide__sidebar">
        <TopicLogoBadge src={meta.topicLogoSrc} />
      </div>
    </SlideShell>
  )
}
