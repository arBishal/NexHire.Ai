import {
  CurrencyBangladeshiIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export const NAV_LINKS_DEFAULT = [
  {
    label: "Pricing",
    href: "/#pricing",
    icon: (
      <CurrencyBangladeshiIcon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-360 group-active:-rotate-90" />
    ),
  },
  {
    label: "About",
    href: "/#about",
    icon: (
      <InformationCircleIcon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-360 group-active:-rotate-90" />
    ),
  },
];

export const NAV_LINKS_PITCH = [
  {
    label: "Problem",
    href: "/pitch/#problem",
  },
  {
    label: "Solution",
    href: "/pitch/#solution",
  },
  {
    label: "Features",
    href: "/pitch/#features",
  },
  {
    label: "Strategic Edge",
    href: "/pitch/#edge",
  },
  {
    label: "Tech Stack",
    href: "/pitch/#tech",
  },
  {
    label: "Business Model",
    href: "/pitch/#business",
  },
  {
    label: "What's Next?",
    href: "/pitch/#next",
  },
];
