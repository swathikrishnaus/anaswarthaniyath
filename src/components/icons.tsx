import { SiFacebook, SiInstagram, SiSpotify } from "react-icons/si";
import type { Channel } from "@/lib/site";

export const icons = {
  spotify: SiSpotify,
  instagram: SiInstagram,
  facebook: SiFacebook,
};

export type IconName = keyof typeof icons;

export function ChannelIcons({
  channels,
  className,
}: {
  channels: Channel[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {channels.map(({ label, href, icon }) => {
        const Icon = icons[icon];
        const external = /^https?:\/\//.test(href);
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <Icon aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
