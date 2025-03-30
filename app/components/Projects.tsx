import Image from "next/image";

const projects = [
  {
    title: "ChatPDF",
    description:
      "ChatPDF SD is an interactive PDF analysis platform built with React.js and hosted on Vercel. It harnesses conversational AI to transform static documents into engaging experiences. With its intuitive chat interface, users can ask questions, receive detailed summaries, and explore complex content effortlessly.",
    imageURL: "/images/ChatPDF.png",
    links: [
      {
        icon: "/images/github.svg",
        url: "https://github.com/Mohayyad-Muawia/chatpdf",
      },
      {
        icon: "/images/arrow.svg",
        url: "https://chatpdf-sd.vercel.app/",
      },
    ],
  },
  {
    title: "DocAI",
    description:
      "DocAI is a comprehensive healthcare platform built with Next.js that streamlines access to reliable health advice. It features an AI chatbot powered by Botpress for quick answers and personalized tips, alongside a rich library of health articles. For more in-depth support, users can also chat directly with certified doctors for expert advice, making it a one-stop solution for staying informed and taking control of your health.",
    imageURL: "/images/DocAI.png",
    links: [
      {
        icon: "/images/github.svg",
        url: "https://github.com/husamXA1/docai",
      },
      {
        icon: "/images/arrow.svg",
        url: "https://docai-healthcare.vercel.app/",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[--theme-color] py-20">
      <h2 className="text-center text-2xl lg:text-3xl font-bold mb-5">
        My Projects
      </h2>
      <div className="flex flex-col container gap-10 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-8 shadowed bg-white md:flex ${
              index % 2 == 1 ? "flex-row-reverse" : "flex-row"
            } gap-5 items-center`}
          >
            <div className="w-full rounded-lg overflow-hidden border-2 border-black">
              <Image
                src={project.imageURL}
                alt={project.title}
                width={1080}
                height={1080}
              />
            </div>
            <div className="w-full">
              <h3 className="text-xl my-2 font-semibold">{project.title}</h3>
              <p className="mt-2 text-justify">{project.description}</p>
              <div className="flex gap-2 mt-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    className="hover:opacity-85 transition-opacity"
                  >
                    <Image
                      src={link.icon}
                      alt={project.title}
                      width={35}
                      height={35}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
