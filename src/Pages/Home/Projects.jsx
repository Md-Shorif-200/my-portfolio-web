import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";



const Projects = () => {

  const [projects,setProjects] = useState([])
    useEffect(() => {
         const fetchProjectData = async () => {
           
           try {
             const res = await fetch('/public/projects.json');
             const data = await res.json();
              console.log(data);
              
        
               setProjects(data)
             
    } catch (error) {
       console.log(error);
        
    }
         }

         fetchProjectData()
    } , [])



  return (
    <section id="projects" className="py-16 px-4 primary_bg_color dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center primary_color dark:text-white">
          My Projects
        </h2>
        <div className=" w-full grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
