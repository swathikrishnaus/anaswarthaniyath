import { LuArrowUpRight, LuPhone } from "react-icons/lu";
import { SiWhatsapp } from "react-icons/si";
import { isExternal, site } from "@/lib/site";
import { ChannelIcons } from "./icons";
import Section from "./Section";
import styles from "./Contact.module.css";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const externalProps = (href: string) =>
  isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Music", href: "#music" },
      { label: "Contact", href: "#contact" },
    ],
  },
  { title: "Listen", links: site.streaming },
  { title: "Follow", links: site.socials },
  {
    title: "Contact",
    links: [
      { label: "Call", href: site.phone.tel },
      { label: "WhatsApp", href: site.phone.whatsapp },
    ],
  },
];

export default function Contact() {
  return (
    <>
      <Section id="contact" eyebrow="Contact" title="Work together">
        <div className={styles.card}>
          <div className={styles.copy}>
            <p className={styles.headline}>Let’s make something together.</p>
            <p className={styles.note}>
              For collaborations, film &amp; ad scoring, live performances and
              bookings.
            </p>
          </div>

          <div className={styles.actions}>
            <div className={styles.buttons}>
              <a href={site.phone.tel} className="btn btn-light">
                <LuPhone aria-hidden />
                {site.phone.display}
              </a>
              <a
                href={site.phone.whatsapp}
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp aria-hidden />
                WhatsApp
              </a>
            </div>
            <ChannelIcons
              channels={[...site.streaming, ...site.socials]}
              className={styles.icons}
            />
          </div>
        </div>
      </Section>

      <footer className={styles.footer}>
        <div className={styles.columns}>
          <div className={styles.brand}>
            <p className={styles.brandName}>{site.name}</p>
            <p className={styles.brandMeta}>
              {site.roles.slice(0, 3).join(" · ")}
              <br />
              {site.location}, India
            </p>
          </div>

          {footerColumns.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h3 className={styles.colTitle}>{title}</h3>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} {...externalProps(href)}>
                      {label}
                      {isExternal(href) && <LuArrowUpRight aria-hidden />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>
            © <CurrentYear /> {site.name}
          </p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
