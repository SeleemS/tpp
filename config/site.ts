export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "The Potcast Productions | ذا بوتكاست برودكشنز",
	description: "We make podcasts.",
	navItems: [
	{
		label: "Home",
		href: "/",
	},
    {
      label: "Original Productions",
      href: "/productions",
    },
    {
      label: "Branded Podcasts",
      href: "/whitelabel",
    },
	{
		label: "Careers",
		href: "/careers",
	  },
    {
      label: "Contact Us",
      href: "/contactus",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Original Productions",
			href: "/productions",
		},
		{
			label: "Branded Podcasts",
			href: "/whitelabel",
		},
		{
			label: "Careers",
			href: "/careers",
		  },
		{
			label: "Contact Us",
			href: "/contactus",
		},
	],
	links: {
		instagram: "https://www.instagram.com/thepotcastproductions",
		youtube: "https://www.youtube.com/@tpp.network",
		email: "mailto:info@tpp.network.com",
		facebook: "https://www.facebook.com/thepotcastproductions",
		tiktok: "https://www.tiktok.com/@tpp.network",
	},
};
