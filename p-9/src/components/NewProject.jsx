import Button from "./Button";
import Input from "./Input";

export default function NewProject() {
  return (
    <div style={{ backgroundColor: "LightSkyBlue", padding: "1%" }}>
      <menu>
        <li>
          <Button>Cancel</Button>
        </li>
        <li>
          <Button>Create new project</Button>
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
