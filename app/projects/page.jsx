import { data } from "../../contents/projects";
import ProjectCard from "../../components/ProjectCard";
import Navbar from "../../components/Navbar";

export default function ProjectPage() {
  return (
    <div className="bg-gradient-to-br py-4 from-indigo-50 via-white to-cyan-100 min-h-screen">
      <div className="mx-4 md:mx-8 lg:mx-44 md:mb-5">
        <Navbar />
        <h1 className="text-2xl md:text-4xl font-bold mt-8 mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {data.map(
            (project, index) =>
              project && <ProjectCard project={project} key={index} />
          )}
        </div>
      </div>
    </div>
  );
}
