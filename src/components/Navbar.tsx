"use client";

import { useEffect, useState } from "react";
import { isExternal, site } from "@/lib/site";
import styles from "./Navbar.module.css";

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#music", label: "Music" },
  { href: "#contact", label: "Contact" },
];

const listen: NavLink = { href: "#music", label: "Listen" };

function NavItem({ href, label, className, onClick }: NavLink & {
  className: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      {...(isExternal(href) && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Compact, solid bar once the page is scrolled past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape or when resizing up to desktop
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 901px)");
    const onResize = (e: MediaQueryListEvent) => e.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, []);

  // Lock page scroll behind the full-screen mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`${styles.navbar} ${scrolled && !open ? styles.scrolled : ""}`}
      >
        <nav className={styles.inner} aria-label="Main">
          <a href="#home" className={styles.brand} onClick={close}>
            {site.name}
          </a>

          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.label}>
                <NavItem {...link} className={styles.link} />
              </li>
            ))}
          </ul>

          <NavItem {...listen} className={`btn btn-primary ${styles.cta}`} />

          <button
            className={styles.toggle}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span className={styles.toggleBar} />
            <span className={styles.toggleBar} />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        <ul>
          {[...links, listen].map((link) => (
            <li key={link.label}>
              <NavItem {...link} className={styles.mobileLink} onClick={close} />
            </li>
          ))}
        </ul>
        <p className={styles.mobileMeta}>{site.location}</p>
      </div>
    </>
  );
}
