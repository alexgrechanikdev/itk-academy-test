import { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { useToDoStore } from "../../store";
import { addLocalStorage, createTask } from "../../utils";
import "./styles.css";

export const AddPanel = () => {
  const [text, setText] = useState("");

  const {
    allTasks,
    filterValue,
    noCompleteTasks,
    getCountNoCompleteTasks,
    addTask,
  } = useToDoStore((state) => state);

  const handleClick = () => {
    const task = createTask(text);
    addTask(task);
    getCountNoCompleteTasks();
    setText("");
    addLocalStorage([...allTasks, task], filterValue, noCompleteTasks);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="add_panel">
      <input
        type="text"
        className="add_panel_input"
        placeholder="Добавьте новую задачу..."
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        disabled={!text.length}
        className="add_panel_button"
        onClick={handleClick}
      >
        Добавить
      </button>
    </div>
  );
};
