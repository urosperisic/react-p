import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject }) {
  return (
    <aside style={{ backgroundColor: "LightGoldenRodYellow", padding: "1%" }}>
      <h2>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
    </aside>
  );
}
