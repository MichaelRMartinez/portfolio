
"use client";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import Logo from "./Logo";
import { navItems } from "@/data/data";
import Link from "next/link";
import { useState } from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  
  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (<>
    <header className="sticky top-0 left-0 w-full bg-white py-4 border-b border-neutral-200 z-50">
      <div className="container">
        <div className="px-4 sm:px-8 flex items-center justify-between">
          {/* LOGO */}
          <Logo />

          {/* MOBILE MENU */}
          <nav className="lg:hidden relative">
            {/* MENU ICON */}
            <button className="p-3 shadow-util rounded-full font-medium hover:bg-neutral-200 focus:bg-neutral-200 transition-colors" onClick={() => handleClick()}>
              {isOpen ? <RiCloseLine />: <RiMenuLine />}
            </button>

            {/* LIST */}
            {isOpen && (
              <div className={`absolute top-full right-0 mt-3 shadow-util bg-white rounded-lg min-w-[200px] w-full transition`}>
                <ul>
                  {navItems.map((item) => (
                    <li key={item.id} className="relative group">
                      <Link href={item.href} className="flex items-center justify-between gap-1 text-gray-600 hover:text-teal-600 hover:bg-teal-50 focus:text-teal-600 focus:bg-teal-50 transition-all px-4 py-1.5 rounded-lg" onClick={() => handleClick()}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                <div>
                  <button className="button shadow-util rounded-4xl px-3 py-1 bg-teal-200 hover:bg-teal-400 focus:bg-teal-400 ml-3 mt-3 mb-3">Contact Me</button>
                </div>
              </div>
            )}

          </nav>

          {/* DESKTOP MENU */}
          <nav className="flex-1 lg:flex flex-wrap hidden justify-end items-center gap-8">
            {/* LIST */}
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="decoration-transparent hover:underline underline-offset-6 decoration-2 transition-colors duration-300 hover:decoration-current">{item.label}</Link>
                </li>
              ))}
            </ul>
            <div>
              <button className="button shadow-util rounded-4xl px-3 py-1 bg-teal-200 hover:bg-teal-400 focus:bg-teal-400 transition-colors duration-300">Contact Me</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </>)
}
