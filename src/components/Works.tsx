import type { CSSProperties } from "react";
import { SiSpotify } from "react-icons/si";
import { isExternal, site } from "@/lib/site";
import Cover from "./Cover";
import Section from "./Section";
import Shelf from "./Shelf";
import styles from "./Works.module.css";

const externalProps = (href: string) =>
  isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

function PlayIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden>
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
}

export default function Works() {
  const latest = site.featured;

  return (
    <Section id="music" eyebrow="Discography" title="Music">
      <article
        className={styles.featured}
        style={{ "--hue": 212 } as CSSProperties}
      >
        <div className={styles.featuredCover}>
          <Cover
            work={latest}
            index={0}
            sizes="(max-width: 700px) 60vw, 280px"
          />
        </div>
        <div className={styles.featuredBody}>
          <p className={styles.kicker}>Featured single</p>
          <h3 className={styles.featuredTitle}>{latest.title}</h3>
          <p className={styles.featuredMeta}>
            {site.name} <span aria-hidden>•</span> {latest.category}
          </p>
          <a
            href={latest.href}
            className={`btn btn-primary ${styles.featuredCta}`}
            {...externalProps(latest.href)}
          >
            <SiSpotify aria-hidden />
            Listen on Spotify
          </a>
        </div>
      </article>

      <Shelf title="Film scores & ad music">
        {site.works.map((work, i) => (
          <li key={i}>
            <a
              href={work.href}
              className={styles.card}
              {...externalProps(work.href)}
            >
              <div className={styles.cardCover}>
                <Cover work={work} index={i} sizes="340px" wide badge />
                <span className={styles.play} aria-hidden>
                  <PlayIcon />
                </span>
              </div>
              <h4 className={styles.title}>{work.title}</h4>
              <p className={styles.category}>
                {work.role} <span aria-hidden>·</span> {work.category}
              </p>
            </a>
          </li>
        ))}
      </Shelf>
    </Section>
  );
}
