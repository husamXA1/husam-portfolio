import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[--theme-color] py-20" id="about">
      <div className="container flex max-lg:flex-col gap-10 items-center">
        <div className="w-full">
          <Image
            src="/images/profile-info.svg"
            alt="About"
            width={1080}
            height={1080}
          />
        </div>
        <div className="w-full bg-white p-10 rounded-lg shadowed flex flex-col gap-2 items-start">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg">
            A Web Developer with a focus on front-end development using React,
            Next.js, and TailwindCSS. Skilled in creating responsive websites
            that work well on all devices. Have experience with backend
            development and building APIs using Node.js and Express. Passionate
            about solving complex problems, improving user experiences, and
            collaborating with teams to create impactful digital solutions.
            Dedicated to writing clean code and learning new tools and
            technologies to improve my work.
          </p>
          <Link className="btn" href="#contact">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
