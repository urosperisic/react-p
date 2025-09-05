import Input from "./Input";

export default function NewProject() {
  return (
    <div style={{ backgroundColor: "lightcoral", padding: "1%" }}>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
