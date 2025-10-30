import { useState, useEffect } from "react";
import type { FC } from "react";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import Save from "../../assets/save.svg";
import NoEdit from "../../assets/not-edit.svg";
import type { ITask } from "../../types";
import { addLocalStorage } from "../../utils";
import { useToDoStore } from "../../store";
import "./styles.css";

interface IToDoItem {
  task: ITask;
}

export const ToDoItem: FC<IToDoItem> = ({ task }) => {
  const { complete, taskText, id } = task;
  const [showEdit, setShowEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const {
    allTasks,
    filterValue,
    noCompleteTasks,
    deleteTask,
    getCountNoCompleteTasks,
    setCompleteTask,
    changeTask,
  } = useToDoStore((state) => state);

  const handleRemoveTask = () => {
    deleteTask(id);
    getCountNoCompleteTasks();
  };

  const handleCompleteChange = () => {
    if (showEdit) {
      setShowEdit(!showEdit);
    }
    setCompleteTask(id);
    getCountNoCompleteTasks();
  };

  const handleSaveTask = () => {
    changeTask(id, inputValue);
    setShowEdit(!showEdit);
  };

  useEffect(() => {
    addLocalStorage(allTasks, filterValue, noCompleteTasks);
  }, [allTasks, filterValue, noCompleteTasks]);

  return (
    <div
      className={`to-do_item${
        complete ? " task_complete" : " checkbox_wrapper_width"
      }`}
    >
      <div
        className={`checkbox_wrapper${
          showEdit ? "" : " checkbox_wrapper_width"
        }`}
      >
        <input
          id={`${id}`}
          type="checkbox"
          className="to-do_item_checkbox"
          checked={complete}
          onChange={handleCompleteChange}
        />
        {!showEdit && (
          <label htmlFor={`${id}`} className="task_checkbox_label">
            <p className={`to-do_item_text`}>{taskText}</p>
          </label>
        )}
      </div>
      {showEdit && (
        <input
          autoFocus
          type="text"
          className="to-do_item_text_edit"
          defaultValue={taskText}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      <div className="to-do_item_buttons">
        <button
          disabled={!showEdit}
          className="to-do_item_button"
          onClick={handleSaveTask}
        >
          <img className="to-do_item_button_icon" src={Save} alt="Edit icon" />
        </button>
        <button
          disabled={complete}
          className="to-do_item_button"
          onClick={() => {
            setShowEdit(!showEdit);
            setInputValue(!showEdit ? taskText : "");
          }}
        >
          <img
            className={showEdit ? "to-do_item_button_icon" : ""}
            src={showEdit ? NoEdit : Edit}
            alt="Edit icon"
          />
        </button>
        <button className="to-do_item_button">
          <img
            className="to-do_item_button_icon"
            src={Delete}
            alt="Edit icon"
            onClick={handleRemoveTask}
          />
        </button>
      </div>
    </div>
  );
};
