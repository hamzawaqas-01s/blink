import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import LinkedinIcon from "@/components/LinkedinIcon";
import GithubIcon from "@/components/GithubIcon";
import XIcon from "@/components/XIcon";

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