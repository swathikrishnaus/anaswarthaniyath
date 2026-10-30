"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import styles from "./Shelf.module.css";

// Horizontally scrolling row of cards with prev/next controls
export default function Shelf({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () =>
      setEdges({
        start: el.scrollLeft <= 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: number) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className={styles.shelf}>
      <div className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.controls}>
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll(-1)}
            disabled={edges.start}
          >
            <LuChevronLeft aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll(1)}
            disabled={edges.end}
          >
            <LuChevronRight aria-hidden />
          </button>
        </div>
      </div>
      <ul ref={track} className={styles.track}>
        {children}
      </ul>
    </div>
  );
}
