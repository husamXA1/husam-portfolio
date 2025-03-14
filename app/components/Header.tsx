"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="bg-[#f3d129] text-gray-800 border-b-5 border-b-gray-800">
      <div className="container flex justify-between items-center py-4">
        <Link href="#"><h1 className="font-bold text-xl">Husam</h1></Link>
        <nav className={`md:flex ${!showMenu && "hidden"} max-md:absolute top-0 left-0 max-md:w-full max-md:h-screen max-md:bg-[#f3d129] flex justify-center items-center`}>
          <ul className="md:flex gap-5">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <button className="md:hidden absolute top-5 right-5" onClick={() => setShowMenu(false)}>
            <FaTimes size={24} />
          </button>
        </nav>
        <button className="md:hidden" onClick={() => setShowMenu(true)}>
            <FaBars size={24} />
        </button>
      </div>
    </header>
  );
}
