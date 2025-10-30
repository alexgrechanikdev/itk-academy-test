import { create } from "zustand";
import type { IState } from "../types";

export const useToDoStore = create<IState>((set) => ({
  allTasks: [],
  filterValue: "all",
  noCompleteTasks: 0,
  getCountNoCompleteTasks: () =>
    set(({ allTasks }) => ({
      noCompleteTasks: allTasks.filter((item) => !item.complete).length,
    })),
  addTask: (newTask) =>
    set(({ allTasks }) => {
      return {
        allTasks: [...allTasks, newTask],
      };
    }),
  deleteTask: (id) =>
    set(({ allTasks }) => ({
      allTasks: allTasks.filter((task) => task.id !== id),
    })),
  setCompleteTask: (id) =>
    set(({ allTasks }) => ({
      allTasks: allTasks.map((task) => {
        if (task.id === id) {
          task.complete = !task.complete;
        }

        return task;
      }),
    })),
  changeTask: (id, newTaskText) =>
    set(({ allTasks }) => ({
      allTasks: allTasks.map((task) => {
        if (task.id === id) {
          task.taskText = newTaskText;
        }

        return task;
      }),
    })),
  changeFilterValue: (newValue) => set({ filterValue: newValue }),
  setStore: (storeData) => {
    const { allTasks, filterValue, noCompleteTasks } = storeData;
    set({ filterValue, allTasks, noCompleteTasks });
  },
}));
