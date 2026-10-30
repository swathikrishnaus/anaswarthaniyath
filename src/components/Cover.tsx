import Image from "next/image";
import type { CSSProperties } from "react";
import { SiInstagram, SiSpotify, SiYoutube } from "react-icons/si";
import type { Platform, Work } from "@/lib/site";
import styles from "./Cover.module.css";

const platformIcons: Record<Platform, typeof SiYoutube> = {
  youtube: SiYoutube,
  spotify: SiSpotify,
  instagram: SiInstagram,
};

// Artwork for a work; falls back to a tinted typographic cover until `cover` is set
export default function Cover({
  work,
  index,
  sizes,
  wide,
  badge,
}: {
  work: Work;
  index: number;
  sizes: string;
  /** 16:9 video frame instead of a square sleeve */
  wide?: boolean;
  /** Show the platform icon in the corner */
  badge?: boolean;
}) {
  const PlatformIcon = platformIcons[work.platform];

  return (
    <div
      className={`${styles.cover} ${wide ? styles.wide : ""}`}
      style={{ "--hue": (index * 47 + 140) % 360 } as CSSProperties}
    >
      {work.cover ? (
        <>
          {work.contain && (
            <Image src={work.cover} alt="" fill sizes="64px" className={styles.blur} />
          )}
          <Image
            src={work.cover}
            alt=""
            fill
            sizes={sizes}
            className={work.contain ? styles.contain : styles.image}
          />
        </>
      ) : (
        <div className={styles.placeholder} aria-hidden>
          <span className={styles.title}>{work.title}</span>
        </div>
      )}
      {badge && (
        <span className={styles.badge} aria-hidden>
          <PlatformIcon />
        </span>
      )}
    </div>
  );
}
