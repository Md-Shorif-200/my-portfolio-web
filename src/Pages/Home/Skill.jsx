import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMui , SiDaisyui, SiFramer, SiFirebase,SiAdobephotoshop  } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

import { SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens, SiVercel, SiAxios, SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa"; // REST API


export const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl animate-spin-slow" /> },
  { name: "Material UI", icon: <SiMui  className="text-indigo-400 text-3xl" /> },
  { name: "Daisy UI", icon: <SiDaisyui className="text-pink-400 text-3xl" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-3xl" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-violet-400 text-3xl" /> },
  { name: "Sass", icon: <FaSass className="text-pink-500 text-3xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-3xl" /> },
  { name: "Figma to HTML", icon: <FaFigma className="text-fuchsia-500 text-3xl" /> },
  { name: "PSD to HTML", icon: <SiAdobephotoshop  className="text-blue-400 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt  className="text-orange-500 text-3xl" /> },
    { name: "Responsive Design",  icon: "📱" },

];



const backendSkills = [
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-3xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-3xl" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-400 text-3xl" /> },
  { name: "Axios", icon: <SiAxios className="text-blue-400 text-3xl" /> },
  { name: "REST API", icon: <FaLink className="text-purple-400 text-3xl" /> },
  { name: "Vercel", icon: <SiVercel className="text-white text-3xl" /> },
];

export default function Skill() {
  return (
    <section className="py-14 px-5 primary_bg_color text-gray-800" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold uppercase primary_color mb-2">My Skills</h2>
        <p className="accent_color  capitalize mb-10 text-lg">
          As a Junior web  Developer, I’m highly skilled in frontend technologies and have a working knowledge of backend tools.
        </p>

        {/* Frontend Skills */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-5 text-[#FF014F]/95">Frontend Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className=" frontEnd_skills flex flex-col items-center justify-center p-4 border border-blue-100 bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-xl  transition-all"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-base font-medium text-gray-100">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend & Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-5 text-[#FF014F]/95">Backend & Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className=" backend_skills flex flex-col items-center justify-center p-4 border rounded-xl  bg-gradient-to-br from-[#1f2937] to-[#111827]   transition-all"
              >
                <div className="text-2xl mb-2">{skill.icon}</div>
                <p className="text-base text-gray-100">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
