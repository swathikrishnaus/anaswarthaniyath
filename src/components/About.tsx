import Image from "next/image";
import type { CSSProperties } from "react";
import { site } from "@/lib/site";
import Section from "./Section";
import styles from "./About.module.css";

const facts = [
  { label: "Based in", value: "Thrissur, Kerala" },
  { label: "Training", value: "Carnatic, since age 6" },
  { label: "Instruments", value: "Voice · Guitar · Sitar" },
];

const journey = [
  {
    title: "Early Roots & Classical Foundation",
    tag: "Carnatic",
    text: "Raised in a musically inclined household with a father who was a composer and songwriter, Anaswar’s formal journey began at the age of six with Carnatic classical music.",
  },
  {
    title: "Guitar & Classical Studies",
    tag: "Guitar",
    text: "To expand his harmonic vocabulary and pave the way for music production, he trained in both acoustic and classical guitar at the Chethana Music Academy in Thrissur, as well as under the guidance of Sharath Subramanian.",
  },
  {
    title: "Sitar Exploration",
    tag: "Sitar · Now",
    text: "Continuing his dedication to lifelong learning, he is currently studying the sitar under renowned sitarist Paulson K.J., adding a rich classical instrument to his creative palette.",
  },
];

const services = [
  {
    title: "Independent Music",
    text: "Writing, composing, producing, and performing original indie songs.",
    hue: 152,
  },
  {
    title: "Film & Media Scoring",
    text: "Crafting evocative background scores and original sound design for short films and feature projects.",
    hue: 262,
  },
  {
    title: "Commercial Composition",
    text: "Producing high-impact jingles and background tracks for ad films.",
    hue: 22,
  },
  {
    title: "Vocal & Instrumental Performance",
    text: "Lead vocals, acoustic/classical guitar work, and sitar arrangements.",
    hue: 200,
  },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="The Artist">
      <article className={styles.feature}>
        <div className={styles.media}>
          <Image
            src={site.aboutImage}
            alt={`${site.name} playing acoustic guitar under a cloudy sky`}
            fill
            sizes="100vw"
            className={styles.photo}
          />
        </div>
        <div className={styles.featureBody}>
          <p className={styles.lead}>
            Rooted in classical traditions, driven by modern soundscapes.
          </p>
          <p className={styles.bio}>
            An independent singer-songwriter, composer and music producer based
            in Thrissur, Kerala. Anaswar bridges the gap between soulful
            artistic expression and commercial versatility — from independent
            singles and short-film scores to music for ad films, his work
            reflects a fluid blend of genres and a commitment to genuine
            musicianship.
          </p>
        </div>
      </article>

      <dl className={styles.facts}>
        {facts.map(({ label, value }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Musical Journey &amp; Training</h3>
        <ol className={styles.tracklist}>
          {journey.map(({ title, tag, text }, i) => (
            <li key={title}>
              <span className={styles.num}>{i + 1}</span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
              <span className={styles.tag}>{tag}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>What I Do</h3>
        <ul className={styles.tiles}>
          {services.map(({ title, text, hue }) => (
            <li
              key={title}
              className={styles.tile}
              style={{ "--hue": hue } as CSSProperties}
            >
              <h4>{title}</h4>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
