import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [myProject, setMyProject] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const res = await fetch("/projects.json");
        const data = await res.json();
        setProjects(data);
        const project = data.find((item) => item.id == id);
        setMyProject(project);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load project details.");
      }
    };

    fetchProjectData();
  }, [id]);

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        <p>{error}</p>
      </div>
    );
  }

  if (!myProject) {
    return (
      <div className="text-center text-gray-500 mt-10">
        <p>Loading project details...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-16 px-4 primary_bg_color   dark:bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-[#FF014F] hover:underline mb-6">
          <FaArrowLeft className="mr-2" /> Back to home
        </Link>

        {/* Project Image */}
        <div className="w-full rounded-md overflow-hidden shadow-md mb-8">
          <img
            src={myProject.image}
            alt={myProject.title}
            className="w-full md:w-[85%] mx-auto "
          />
        </div>

        <div className=" project_details space-y-4 w-full md:w-[85%]  mx-auto p-6">
          <h2 className="text-3xl font-bold primary_color dark:text-white">{myProject.title}</h2>
             {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={myProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#333] hover:bg-black text-white px-5 py-2 rounded flex items-center"
              >
              GitHub Repo <FaGithub className="ml-2" />
            </a>
            <a
              href={myProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF014F] hover:bg-red-700 text-white px-5 py-2 rounded flex items-center"
              >
              Live Site <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
             
                <hr className="text-gray-300" />


                {/* Project Details */}

                <div className="md:flex gap-x-6">
            <h4 className="font-semibold primary_color dark:text-white text-lg">Technologies Used:</h4>
            <p className="text-sm accent_color dark:text-gray-400 mt-1">
              {myProject.technologies.join(" | ")}
            </p>

                </div>


          <div>
                  <h4 className="font-semibold primary_color dark:text-white text-xl my-3 ">About Project :</h4>
          <p className="accent_color dark:text-gray-300 text-lg">{myProject.fullDescription}</p>


                 <h4 className="font-semibold primary_color dark:text-white text-xl my-3 ">Challange Faced :</h4>
          <p className="accent_color dark:text-gray-300 text-lg">{myProject.challengesFaced}</p>


                 <h4 className="font-semibold primary_color dark:text-white text-xl my-3 ">Future Plan :</h4>
          <p className="accent_color dark:text-gray-300 text-lg">{myProject.futurePlan}</p>


          </div>

       
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
