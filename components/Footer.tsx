import Link from "next/link";
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import { navItems } from "@/data/data";
import Logo from "./Logo";

export default function Footer() {
  return (<>
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container space-y-6">
        {/* FOOTER SOCIAL LINKS */}
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 ">
          <a href="" className="flex gap-1 underline underline-offset-2 hover:underline-offset-4 hover:text-teal-200 transition-all duration-300 ease-in-out">
            <RiLinkedinBoxFill /> LinkedIn
          </a>
          <a href="" className="flex gap-1 underline underline-offset-2 hover:underline-offset-4 hover:text-teal-200 transition-all duration-300 ease-in-out">
            <RiGithubFill /> GitHub
          </a>
        </div>

        {/* FOOTER NAV LINKS */}
        <div className="flex items-center justify-center flex-col md:flex-row gap-4">
          {navItems.map((item) => (
            <div key={item.id} className="underline underline-offset-2 hover:underline-offset-4 hover:text-teal-200 transition-all duration-300 ease-in-out">
              <Link href={item.href}>
                {item.label}
              </Link>
            </div>
          ))}
          <div className="underline underline-offset-2 hover:underline-offset-4 hover:text-teal-200 transition-all duration-300 ease-in-out">
            Contact Me
          </div>
        </div>
      </div>
    </footer>
  </>)
}
