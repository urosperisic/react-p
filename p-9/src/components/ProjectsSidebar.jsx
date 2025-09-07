import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projects }) {
  return (
    <aside style={{ backgroundColor: "LightGoldenRodYellow", padding: "1%" }}>
      <h2>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button>{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
