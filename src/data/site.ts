export const site = {
  name: 'GDG Aranjuez',
  eventName: 'DevFest Aranjuez 2026',
  edition: 2026,
  date: '2026-10-03',
  dateDisplay: '3 de octubre del 2026',
  urls: {
    site: 'https://devfest2026.gdg-aranjuez.com/',
    tickets:
      'https://www.eventbrite.com/o/gdg-aranjuez-83358663463',
    pastEditions: {
      2024: 'https://devfest-2024-aranjuez.vercel.app/',
      2025: 'https://devfest2025.gdg-aranjuez.com/',
    },
    social: {
      linkedin:
        'https://www.linkedin.com/company/gdg-aranjuez/posts/?feedView=all',
      twitter: 'https://x.com/GDGAranjuez',
    },
  },
} as const;

export type SiteConfig = typeof site;
