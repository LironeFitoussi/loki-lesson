import type { SectionSlide as SectionSlideData, DeckMeta } from './types'
import { resolveDir } from './rtl'
import { SlideShell, IitcLogo, BrandFooter, TopicLogoBadge } from './SlideShell'
import './SectionSlide.css'

export function SectionSlide({ slide, meta }: { slide: SectionSlideData; meta: DeckMeta }) {
  const dir = resolveDir(slide.title, slide.intro)
  return (
    <SlideShell dir={dir} className="section-slide">
      <IitcLogo />
      <div className="section-slide__body">
        <h2 className="section-slide__title">{slide.title}</h2>
        {slide.intro && <p className="section-slide__intro">{slide.intro}</p>}
      </div>
      <BrandFooter author={meta.author} />
      <div className="section-slide__dark" aria-hidden="true">
        <div className="section-slide__shapes" />
      </div>
      <div className="section-slide__topic">
        <TopicLogoBadge src={meta.topicLogoSrc} />
      </div>
    </SlideShell>
  )
}
