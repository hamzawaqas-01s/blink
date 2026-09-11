import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

/* Lucide's 1.0 release removed every trademarked brand icon (GitHub,
   LinkedIn, Twitter/X, Facebook, Instagram, Slack, Figma, and more) —
   not just GitHub. Any brand logo is shipped here as inline SVG instead
   of imported from lucide-react, so an upgrade can't break this file. */

function GithubIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.24 3H21l-6.5 7.43L22.18 21h-6.15l-4.82-6.3-5.51 6.3H2.9l6.95-7.95L2 3h6.3l4.36 5.76L18.24 3Zm-1.08 16.17h1.7L7.9 4.73H6.08l11.08 14.44Z" />
    </svg>
  );
}

const links = [
  {
    label: "LinkedIn",
    detail: "Connect with me",
    href: "https://www.linkedin.com/in/hamza-waqas-177157352/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub repo",
    detail: "View the source",
    href: "https://github.com/hamzawaqas-01s/blink",
    icon: GithubIcon,
  },
  {
    label: "Email",
    detail: "hamzawaqas1014@gmail.com",
    href: "mailto:hamzawaqas1014@gmail.com",
    icon: Mail,
  },
  {
    label: "X",
    detail: "@Buildwith_Hamza",
    href: "https://x.com/Buildwith_Hamza",
    icon: XIcon,
  },
];

export default function ContactLinks() {
  return (
    <div className="w-[97vw] h-[90vh] flex justify-center items-center">

    <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
      {links.map(({ label, detail, href, icon: Icon }) => (
        <a
        key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-white border border-purple-100 rounded-2xl p-5 hover:border-purple-300 hover:shadow-sm transition-all"
        >
          <div className="w-11 h-11 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center">
            <Icon className="w-5 h-5 text-purple-700" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-purple-900">{label}</p>
            <p className="text-sm text-slate-500 truncate">{detail}</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-purple-300 ml-auto shrink-0 group-hover:text-purple-600 transition-colors" />
        </a>
      ))}
    </div>
        </div>
  );
}