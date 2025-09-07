import { useId, useState } from "react";
import Button from "./Button";

export default function NewTask({ onAdd }) {
  const inputId = useId();

  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div>
      <button onClick={handleClick}>Add Task</button>
      <p>
        <label htmlFor={inputId}>Task title</label>
        <input
          id={inputId}
          type="text"
          style={{ backgroundColor: "#f0f0f0" }}
          onChange={handleChange}
          value={enteredTask}
        />
      </p>
    </div>
  );
}
