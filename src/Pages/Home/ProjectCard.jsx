import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="project_card w-full h-[450px] flex flex-col md:flex-row secondary_bg_color dark:bg-[#1a1a1a] rounded-sm overflow-hidden p-2">
      {/* Project Image */}
      <div className="w-full md:w-[60%]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full "
        />
      </div>

      {/* Project Details */}
      <div className="w-full md:w-[40%]  grid  items-end dark:bg-[#121212] p-4 ">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-bold  primary_color dark:text-white" data-aos="fade-up">{project.title}</h3>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-[#FF014F] text-white px-3 py-2 text-sm rounded hover:bg-red-700 transition"
            >
              View Live <FaExternalLinkAlt className="inline ml-1" />
            </a>
          </div>

          <p className="accent_color dark:text-gray-300 text-sm mb-4" data-aos="fade-up" data-aos-delay="100">{project.description}</p>

          <div className="" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-semibold accent_color dark:text-gray-200">Technologies used:</h4>
            <p className="text-md accent_color dark:text-gray-400 mt-1">
              {project.technologies.join(" | ")}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 " data-aos="fade-up" data-aos-delay="300">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#333] hover:bg-black text-white px-5 py-2 rounded flex items-center"
          >
            View GitHub Repo <FaGithub className="inline ml-1" />
          </a>
          <Link to={`project-details/${project?.id}`} className=" text-white px-4 py-2 text-sm rounded border border-[#FF014F] hover:bg-[#FF014F] transition-all">
            Project Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
