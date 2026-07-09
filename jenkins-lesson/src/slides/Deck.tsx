import { useCallback, useEffect, useState } from 'react'
import type { DeckMeta, Slide } from './types'
import { CoverSlide } from './CoverSlide'
import { SectionSlide } from './SectionSlide'
import { ContentSlide } from './ContentSlide'
import './Deck.css'

function indexFromHash(total: number): number {
  const match = /^#\/(\d+)$/.exec(window.location.hash)
  if (!match) return 0
  const parsed = Number(match[1]) - 1
  return Number.isFinite(parsed) && parsed >= 0 && parsed < total ? parsed : 0
}

export function Deck({ meta, slides }: { meta: DeckMeta; slides: Slide[] }) {
  const [index, setIndex] = useState(() => indexFromHash(slides.length))

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(next, 0), slides.length - 1)
      setIndex(clamped)
      window.location.hash = `/${clamped + 1}`
    },
    [slides.length],
  )

  useEffect(() => {
    const onHashChange = () => setIndex(indexFromHash(slides.length))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [slides.length])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault()
        goTo(index + 1)
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        goTo(index - 1)
      } else if (event.key.toLowerCase() === 'f') {
        document.documentElement.requestFullscreen?.()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [index, goTo])

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const isLeftHalf = event.clientX < window.innerWidth / 2
    goTo(isLeftHalf ? index - 1 : index + 1)
  }

  const slide = slides[index]

  return (
    <div className="deck">
      <div className="deck__stage" onClick={handleClick}>
        {slide.type === 'cover' && <CoverSlide slide={slide} meta={meta} />}
        {slide.type === 'section' && <SectionSlide slide={slide} meta={meta} />}
        {slide.type === 'content' && <ContentSlide slide={slide} meta={meta} />}
      </div>
      <div className="deck__counter">
        {index + 1} / {slides.length}
      </div>
    </div>
  )
}
