import ProjectCard from "./ProjectCard";

const projects = [
  {
    id : 1,
    title: "ECADEMIX ",
    description: "A full-featured MERN Stack education website with courses, login, admin panel and more.",
    image: "https://i.ibb.co/b56NghqJ/Capture.png",
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    liveLink: "https://academix-e460f.web.app/",
    githubLink: "https://github.com/yourusername/ecademix",
  },
  {
     id : 2,
    title: "Marathon Pro",
    description: "A dynamic marathon management system with coach registration, runner dashboard, and results.",
    image: "https://i.ibb.co/HpkzWsgQ/Capture-2.png",
    technologies: ["React", "Express", "MongoDB", "Framer Motion"],
    liveLink: "https://go-marathon-21c56.web.app/",
    githubLink: "https://github.com/yourusername/marathon-pro",
  },
  {
    id : 3,
    title: "DreamArc",
    description: "Crowdfunding platform for creative ideas and personal causes, with secure donation system.",
     image: "https://i.ibb.co/R4YCYPF0/Capture.png",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://dreamarc.vercel.app",
    githubLink: "https://github.com/yourusername/dreamarc",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 primary_bg_color dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center primary_color dark:text-white">
          My Projects
        </h2>
        <div className=" w-full grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
