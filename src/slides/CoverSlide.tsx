import type { CoverSlide as CoverSlideData, DeckMeta } from './types'
import { resolveDir } from './rtl'
import { SlideShell, IitcLogo, TopicLogoBadge } from './SlideShell'
import './CoverSlide.css'

export function CoverSlide({ slide, meta }: { slide: CoverSlideData; meta: DeckMeta }) {
  return (
    <SlideShell dir={resolveDir(slide.title)} className="cover-slide">
      <div className="cover-slide__bg" aria-hidden="true" />
      <IitcLogo />
      <div className="cover-slide__topic">
        <TopicLogoBadge src={meta.topicLogoSrc} />
      </div>
      <div className="cover-slide__pill">{slide.title}</div>
    </SlideShell>
  )
}
