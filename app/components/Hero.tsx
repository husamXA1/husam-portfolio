import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container flex max-md:flex-col gap-10 md:justify-between md:items-center">
        <div className="w-full text-center flex flex-col gap-2">
            <h1 className="text-2xl lg:text-3xl font-bold">Hello, I&apos;m <span className="bg-black px-1 text-[--theme-color]">Husam</span></h1>
            <p className="text-lg lg:text-xl">A Web Developer</p>
            <div className="flex gap-2 justify-center">
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