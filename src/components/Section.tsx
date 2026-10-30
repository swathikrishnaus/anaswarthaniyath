import type { ReactNode } from "react";
import styles from "./Section.module.css";

export default function Section({
  id,
  eyebrow,
  title,
  aside,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <header className={styles.heading}>
        <div>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
        </div>
        {aside}
      </header>
      {children}
    </section>
  );
}
