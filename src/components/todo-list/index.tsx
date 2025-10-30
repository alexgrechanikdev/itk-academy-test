import type { FC } from "react";
import type { ITask } from "../../types";
import { ToDoItem } from "../todo-item";
import "./styles.css";

interface IToDoList {
  tasks: Array<ITask>;
}

export const ToDoList: FC<IToDoList> = ({ tasks }) => {
  return (
    <div className="to-do_list">
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} />
      ))}
    </div>
  );
};
