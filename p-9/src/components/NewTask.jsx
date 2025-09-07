import Button from "./Button";
import Input from "./Input";

export default function NewTask() {
  return (
    <div>
      <Button>Add Task</Button>
      <Input type="text" label="Add task" />
    </div>
  );
}
