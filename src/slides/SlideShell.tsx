import type { ReactNode } from "react";
import type { DeckMeta } from "./types";
import "./SlideShell.css";

export function IitcLogo() {
  return (
    <img
      className="iitc-logo"
      src="/brand/iitc-logo.png"
      alt="IITC — IT Professional Academy"
      // make image 2x bigger than the original size
      style={{
        height: "75px",
        width: "auto",
      }}
    />
  );
}

export function BrandFooter({ author }: { author: DeckMeta["author"] }) {
  return (
    <div className="brand-footer">
      <div className="brand-footer__text">
        <strong>{author.name}</strong>
        <span>{author.role}</span>
      </div>
      {author.githubUrl && (
        <a
          className="brand-footer__github"
          href={author.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <img src="/brand/github-icon.svg" alt="" />
        </a>
      )}
    </div>
  );
}

export function TopicLogoBadge({ src }: { src?: string }) {
  return (
    <div className="topic-logo">
      <img src={src ?? "/brand/topic-logo.png"} alt="" />
    </div>
  );
}

export function SlideShell({
  dir,
  className,
  children,
}: {
  dir: "ltr" | "rtl";
  className: string;
  children: ReactNode;
}) {
  return (
    <section className={`slide ${className}`} dir={dir}>
      {children}
    </section>
  );
}
