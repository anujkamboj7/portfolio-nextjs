import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects }) {
  return (
    <div>
      <ProjectItem projects={projects} />
    </div>
  );
}
