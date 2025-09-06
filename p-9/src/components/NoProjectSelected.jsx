export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div>
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one.</p>
      <p>
        <button onClick={onStartAddProject}>Create new project</button>
      </p>
    </div>
  );
}
