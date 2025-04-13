"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./Hero.css";

const titles = [
  "A Web Developer",
  "A Frontend Engineer",
  "A JavaScript Enthusiast",
  "A Software Engineer",
  "A React Developer",
  "A Next.js Advocate"
]

export default function Hero() {

  const [title, setTitle] = useState("A Web Developer");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
      document.querySelector('.typewriter')?.classList.add('typing');
      setTimeout(() => {
        setTitle(titles[index]);
        document.querySelector('.typewriter')?.classList.remove('typing');
      }
      , 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20" id="hero">
      <div className="container flex max-md:flex-col gap-10 md:justify-between md:items-center">
        <div className="w-full text-center flex flex-col gap-2 justify-center items-center">
            <h1 className="text-2xl lg:text-3xl font-bold">Hello, I&apos;m <span className="bg-black px-1 text-[--theme-color]">Husam</span></h1>
            <p className="text-lg lg:text-xl typewriter">{title}</p>
            <div className="flex gap-4 justify-center">
                <Link className="btn btn-primary" href="#about">About me</Link>
                <Link className="btn" href="#contact">Get in touch</Link>
            </div>
        </div>
        <div className="w-full">
            <Image 
              src="/images/hello.svg" 
              alt="hello" 
              width={1024}
              height={1024}
            />
        </div>
      </div>
    </section>
  );
}