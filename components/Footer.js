
import React from 'react'
import { Mail } from "lucide-react";
import Image from 'next/link.js';
import Link from 'next/link.js';
import LinkedinIcon from './LinkedinIcon.js';
import GithubIcon from './GithubIcon';
import XIcon from './XIcon';

function Footer() {
  const social = [
    {
      label: "LinkedIn", href: "https://www.linkedin.com/in/hamza-waqas-177157352/",
      icon: LinkedinIcon
    },
    {
      label: "Github repo", href: "https://github.com/hamzawaqas-01s/blink",
      icon: GithubIcon
    },
    { label: "Email", href: "mailto:hamzawaqas1014@gmail.com", icon: Mail },
    {
      label: "X", href: "https://x.com/Buildwith_Hamza",
      icon: XIcon
    }
  ];
  return (
    <footer className="bg-purple-950 text-purple-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="flex items-center gap-2 text-lg font-bold text-white">
              <Image href={"/"} alt='brand-icon' width={50} height={50} src={"./shortify-icon.svg"}></Image>
              Blink
            </p>
            <p className="mt-3 text-sm leading-relaxed text-purple-300">
              A link shortener that only does one thing: turns a long link into a short one,
              then gets out of your way.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <p className="text-sm font-semibold text-white">Product</p>
              <ul className="mt-3 space-y-2 text-sm text-purple-300">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/shorten" className="hover:text-white">Shorten a link</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Connect</p>
              <ul className="mt-3 space-y-2 text-sm text-purple-300">
                {social.map((s) => (
                  <li key={s.label} className="flex items-center gap-2">
                    <s.icon className="w-5 h-5" />
                    <Link href={s.href} className="hover:text-white">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-purple-800 pt-6 text-xs text-purple-400">
          2026 Blink. Built in the open — the code is on Github.
        </div>
      </div>
    </footer>
  );
}

export default Footer
