export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "DB FallBack",
  description: "Lorem",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    { title: "Dashboards", href: "/dashboards" },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
