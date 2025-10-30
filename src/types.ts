// import { addLocalStorage } from './utils';
export interface ISortingOption {
  id: number;
  label: string;
  value: string;
}

export interface ITask {
  id: number;
  complete: boolean;
  taskText: string;
}

export type FilterValue = "all" | "active" | "resolved";

export interface IState {
  allTasks: Array<ITask>;
  filterValue: FilterValue;
  noCompleteTasks: number;
  addTask: (newTask: ITask) => void;
  deleteTask: (id: number) => void;
  setCompleteTask: (id: number) => void;
  changeTask: (id: number, newTaskText: string) => void;
  getCountNoCompleteTasks: () => void;
  changeFilterValue: (newValue: FilterValue) => void;
  setStore: (store: StorageData) => void;
}

export type StorageData = Pick<
  IState,
  "allTasks" | "filterValue" | "noCompleteTasks"
>;
