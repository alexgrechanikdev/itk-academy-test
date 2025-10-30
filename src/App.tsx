import { useState, useEffect } from "react";
import { AddPanel } from "./components/add-panel";
import { Select } from "./components/select";
import { ToDoList } from "./components/todo-list";
import { useToDoStore } from "./store";
import {
  SORTING_VARIANTS,
  TASK_DECLENSION_VARIANT,
  TASK_LEFT_DECLENSION_VARIANT,
} from "./constants";
import { filteredTasks, getDeclension, getLocalStorageData } from "./utils";
import type { ITask } from "./types";
import { EmptyList } from "./components/empty-list";
import "./App.css";

function App() {
  const { allTasks, noCompleteTasks, filterValue, setStore } = useToDoStore(
    (state) => state
  );
  const [tasksList, setTasksList] = useState<Array<ITask>>([]);

  useEffect(() => {
    const storage = getLocalStorageData();
    if (storage) {
      setStore(storage);
    }
  }, []);

  useEffect(() => {
    const list = filteredTasks(filterValue, allTasks);
    setTasksList(list);
  }, [allTasks, filterValue]);

  return (
    <>
      <div>
        <div className="container">
          <div className="wrapper">
            <h2 className="title">My TO DO</h2>
            <div className="panel_wrapper">
              <div className="form_wrapper">
                <AddPanel />
                <Select options={SORTING_VARIANTS} />
              </div>
              <p>
                {`${getDeclension(
                  noCompleteTasks,
                  TASK_LEFT_DECLENSION_VARIANT
                )} ${noCompleteTasks} ${getDeclension(
                  noCompleteTasks,
                  TASK_DECLENSION_VARIANT
                )}`}
              </p>
            </div>
            {tasksList.length > 0 ? (
              <ToDoList tasks={tasksList} />
            ) : (
              <EmptyList filterValue={filterValue} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
