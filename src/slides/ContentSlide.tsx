import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import type { ContentSlide as ContentSlideData, DeckMeta } from './types'
import { resolveDir } from './rtl'
import { SlideShell, IitcLogo, BrandFooter, TopicLogoBadge } from './SlideShell'
import './ContentSlide.css'

function textFromHtml(html: string) {
  return html.replace(/<[^>]*>/g, ' ')
}

export function ContentSlide({ slide, meta }: { slide: ContentSlideData; meta: DeckMeta }) {
  const dir = resolveDir(slide.title, textFromHtml(slide.html))
  return (
    <SlideShell dir={dir} className="content-slide">
      <div className="content-slide__pill">{slide.title}</div>
      <div className="content-slide__body">
        <div className="content-slide__html" dangerouslySetInnerHTML={{ __html: slide.html }} />
        {slide.code && (
          <div className="content-slide__terminal" dir="ltr">
            <div className="content-slide__terminal-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <strong>application.log</strong>
            </div>
            <SyntaxHighlighter
              language={slide.code.language}
              customStyle={{
                margin: 0,
                padding: '10px 16px',
                background: 'transparent',
                fontSize: 'clamp(11px, 1.3vw, 16px)',
                lineHeight: 1.3,
              }}
              codeTagProps={{
                style: {
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
                },
              }}
              wrapLongLines
            >
              {slide.code.content}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
      <IitcLogo />
      <BrandFooter author={meta.author} />
      <div className="content-slide__sidebar">
        <TopicLogoBadge src={meta.topicLogoSrc} />
      </div>
    </SlideShell>
  )
}
