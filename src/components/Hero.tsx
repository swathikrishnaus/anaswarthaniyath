import { getImageProps } from "next/image";
import { site } from "@/lib/site";
import { ChannelIcons } from "./icons";
import styles from "./Hero.module.css";

export default function Hero() {
  // Art direction: landscape crop on desktop, portrait crop on mobile
  const common = {
    alt: `${site.name} singing on stage`,
    fill: true,
    priority: true,
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: site.heroImage.desktop });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: site.heroImage.mobile });

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.media}>
        <picture>
          <source media="(min-width: 901px)" srcSet={desktop} />
          <source media="(max-width: 900px)" srcSet={mobile} />
          <img {...rest} alt={common.alt} className={styles.image} />
        </picture>
      </div>
      <div className={styles.shade} aria-hidden />

      <div className={styles.content}>
        <h1 className={styles.name}>{site.name}</h1>

        <ul className={styles.roles}>
          {site.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="#music" className="btn btn-primary">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
            Listen now
          </a>
          <a href="#about" className="btn btn-ghost">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M12 11v6M12 7.5v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            About
          </a>
        </div>
      </div>

      <aside className={styles.channels} aria-label="Listen and follow">
        <div>
          <p className={styles.label}>Listen on</p>
          <ChannelIcons channels={site.streaming} className={styles.icons} />
        </div>
        <div>
          <p className={styles.label}>Follow</p>
          <ChannelIcons channels={site.socials} className={styles.icons} />
        </div>
      </aside>
    </section>
  );
}
