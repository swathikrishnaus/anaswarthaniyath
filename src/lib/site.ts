import type { IconName } from "@/components/icons";

export type Channel = { label: string; href: string; icon: IconName };

export type Platform = "youtube" | "spotify" | "instagram";

export type Work = {
  title: string;
  /** What the project is, e.g. "Short Film" */
  category: string;
  /** Anaswar's credit on it */
  role: string;
  href: string;
  platform: Platform;
  cover?: string;
  /** Artwork isn't 16:9 (square or vertical) — show it whole over a blurred fill */
  contain?: boolean;
};

// Placeholder values are marked TODO — replace them with the real links.
export const site = {
  name: "Anaswar Thaniyath",
  roles: [
    "Singer",
    "Composer",
    "Music Producer",
    "Songwriter",
    "Multi-Instrumentalist",
  ],
  location: "Thrissur, Kerala",

  heroImage: "/images/IMG_2800.JPG",
  aboutImage: "/images/banner.jpg",

  phone: {
    display: "+91 94972 53237",
    tel: "tel:+919497253237",
    whatsapp: "https://wa.me/919497253237",
  },

  streaming: [
    {
      label: "Spotify",
      href: "https://open.spotify.com/artist/6dlixnOniwVDIJXaVxkRhx",
      icon: "spotify",
    },
  ] as Channel[],

  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/anaswarmusical/",
      icon: "instagram",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/anaswarmusic",
      icon: "facebook",
    },
  ] as Channel[],

  featured: {
    title: "Vaanil",
    category: "Single",
    role: "Original Song",
    href: "https://open.spotify.com/track/4lk3GxzKEZJH6C57uu3MHE",
    platform: "spotify",
    cover: "/images/works/vaanil.jpg",
    contain: true,
  } as Work,

  works: [
    {
      title: "Kolothe Thamburatty",
      category: "Short Film",
      role: "Music & BG Score",
      href: "https://www.youtube.com/watch?v=B7dkxqzXaCQ",
      platform: "youtube",
      cover: "/images/works/kolothe-thamburatty.jpg",
    },
    {
      title: "Neeye",
      category: "Musical Short Film",
      role: "Music Director",
      href: "https://www.youtube.com/watch?v=RB_whQL4bsk",
      platform: "youtube",
      cover: "/images/works/neeye.jpg",
    },
    {
      title: "Aanamutta",
      category: "Short Film",
      role: "Background Music",
      href: "https://www.youtube.com/watch?v=ow16tEcpJIc",
      platform: "youtube",
      cover: "/images/works/aanamutta.jpg",
    },
    {
      title: "Johny",
      category: "Short Film",
      role: "Background Music",
      href: "https://www.youtube.com/watch?v=58nzK1B-2E8",
      platform: "youtube",
      cover: "/images/works/johny.jpg",
    },
    {
      title: "Harinarayana Kudu Charitham",
      category: "Short Film",
      role: "Music",
      href: "https://www.youtube.com/watch?v=2GWPbwlp6Zg",
      platform: "youtube",
      cover: "/images/works/harinarayana-kudu-charitham.jpg",
    },
    {
      title: "M32 Dental",
      category: "Ad Film",
      role: "Music",
      href: "https://www.instagram.com/reel/DcVk3F_RK9u/",
      platform: "instagram",
      cover: "/images/works/reel.jpg",
      contain: true,
    },
    {
      title: "Ting Ting",
      category: "Short Film",
      role: "Music",
      href: "https://www.youtube.com/watch?v=DdH1Z3RuqHg",
      platform: "youtube",
      cover: "/images/works/ting-ting.jpg",
    },
    {
      title: "Pattam",
      category: "Short Film",
      role: "Music",
      href: "https://www.youtube.com/watch?v=BYsGVtUX45E",
      platform: "youtube",
      cover: "/images/works/pattam.jpg",
    },
    {
      title: "Vishudha Sakshi",
      category: "Short Film",
      role: "Background Score",
      href: "https://www.youtube.com/watch?v=gReRs-8_evY",
      platform: "youtube",
      cover: "/images/works/vishudha-sakshi.jpg",
    },
    {
      // TODO: confirm credit
      title: "18+",
      category: "Short Film",
      role: "Music",
      href: "https://www.youtube.com/watch?v=kHu948PB2V0",
      platform: "youtube",
      cover: "/images/works/18-plus.jpg",
    },
  ] as Work[],
};

export const isExternal = (href: string) => /^https?:\/\//.test(href);
