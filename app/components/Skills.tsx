import Image from "next/image";

const skills = [
  {
    imageURL: "/images/responsive.svg",
    title: "Frontend",
    description:
      "I craft dynamic and responsive UIs using React and Next.js, focusing on performance, accessibility, and seamless user experiences.",
  },
  {
    imageURL: "/images/server.svg",
    title: "Backend",
    description:
      "I build scalable RESTful APIs with Node.js and Express, integrating databases like MongoDB and PostgreSQL for robust data management.",
  },
  {
    imageURL: "/images/iteration.svg",
    title: "Tools & DevOps",
    description:
      "I streamline development with Git and CI/CD pipelines, deploying applications efficiently on platforms like Vercel and Heroku.",
  },
];

export default function Skills() {
  return (
    <section className="py-20" id="skills">
      <div className="container">
        <h2 className="text-center text-2xl lg:text-3xl font-bold mb-5">
          My Skills
        </h2>
        <div className="flex flex-wrap gap-10 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="p-8 shadowed w-[320px]">
                <Image 
                    src={skill.imageURL}
                    alt={skill.title}
                    width={1080}
                    height={1080}
                />
              <h3 className="text-xl my-2 font-semibold">{skill.title}</h3>
              <p className="mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
