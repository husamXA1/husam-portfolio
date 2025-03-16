"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="bg-[#f3d129] text-black border-b-[5px] border-b-black">
      <div className="container flex justify-between items-center py-4">
        <Link href="#">
          <h1 className="font-semibold text-xl">Husam</h1>
        </Link>
        <nav
          className={`md:flex ${
            !showMenu && "hidden"
          } max-md:fixed top-0 left-0 max-md:w-full max-md:h-screen max-md:bg-[#f3d129] flex justify-center items-center`}
        >
          <ul className="flex max-md:flex-col gap-2 md:gap-5 items-center text-center">
            <li>
              <Link onClick={() => setShowMenu(false)} href="#about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setShowMenu(false)} href="#skills">
                Skills
              </Link>
            </li>
            <li>
              <Link onClick={() => setShowMenu(false)} href="#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={() => setShowMenu(false)} href="#contact">
                Contact
              </Link>
            </li>
            <Link
              className="btn btn-small"
              href="https://docs.google.com/document/d/1TqKdy4PlKYtVR_J2wRINLr-E30pcPp72XnkXwvHa4Qg/edit?usp=sharing"
            >
              Download CV
            </Link>
          </ul>
          <button
            className="md:hidden absolute top-5 right-5"
            onClick={() => setShowMenu(false)}
          >
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
