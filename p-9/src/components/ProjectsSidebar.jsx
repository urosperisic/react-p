import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside style={{ backgroundColor: "LightGoldenRodYellow", padding: "1%" }}>
      <h2>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          let styles = {
            backgroundColor: "#f0f0f0",
          };

          if (project.id === selectedProjectId) {
            styles.backgroundColor = "#fff";
          }

          return (
            <li key={project.id}>
              <button
                style={styles}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
