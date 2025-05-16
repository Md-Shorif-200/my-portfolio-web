import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const ProjectCard = ({ project, index }) => {
  // determine flex direction
  const isSecondCard = index === 1;
  const flexDirectionClass = isSecondCard
    ? "lg:flex-row-reverse"
    : "lg:flex-row";

  return (
    <div className={`project_card w-full lg:h-[450px] flex flex-col ${flexDirectionClass} secondary_bg_color dark:bg-[#1a1a1a] rounded-sm overflow-hidden p-2`}>
      {/* Project Image */}
      <div className="w-full lg:w-[60%]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full"
          initial={{ x: isSecondCard ? 200 : -200, opacity: 0, width: "50%" }}
          whileInView={{ x: 0, opacity: 1, width: "100%" }}
          transition={{ duration: 1, type: 'spring', stiffness: 60, damping: 12 }}
          viewport={{ once: false }}
        />
      </div>

      {/* Project Details */}
      <div className="w-full md:w-[40%] grid items-end dark:bg-[#121212] p-4">
        <div>
          <div className="sm:flex justify-between items-center mb-2">
            <h3 className="text-2xl font-bold primary_color dark:text-white" data-aos="fade-up">
              {project.title}
            </h3>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF014F] text-white px-3 py-2 text-sm rounded hover:bg-red-700 transition block my-4"
            >
              View Live <FaExternalLinkAlt className="inline ml-1" />
            </a>
          </div>

          <p className="accent_color dark:text-gray-300 text-sm mb-4" data-aos="fade-up" data-aos-delay="100">
            {project.description}
          </p>

          <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-semibold accent_color dark:text-gray-200">Technologies used:</h4>
            <p className="text-md accent_color dark:text-gray-400 mt-1">
              {project.technologies.join(" | ")}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6" data-aos="fade-up" data-aos-delay="300">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#333] hover:bg-black text-white px-5 py-2 rounded flex items-center"
          >
            View GitHub Repo <FaGithub className="inline ml-1" />
          </a>
          <Link to={`project-details/${project?.id}`} className="text-white px-4 py-2 text-sm rounded border border-[#FF014F] hover:bg-[#FF014F] transition-all">
            Project Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
