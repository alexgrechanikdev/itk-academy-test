import { FILTER_VALUE } from "./constants";
import type { ITask, StorageData, FilterValue } from "./types";

export const createTask = (value: string): ITask => {
  return {
    id: Date.now(),
    taskText: value,
    complete: false,
  };
};

export const filteredTasks = (
  value: string,
  allTasks: Array<ITask>
): Array<ITask> => {
  switch (value) {
    case "active":
      return allTasks.filter((item) => !item.complete);
    case "resolved":
      return allTasks.filter((item) => item.complete);
    default:
      return allTasks;
  }
};

export const addLocalStorage = (
  allTasks: Array<ITask>,
  filterValue: string,
  noCompleteTasks: number
) => {
  const storageObj = {
    allTasks,
    filterValue,
    noCompleteTasks,
  };

  localStorage.setItem("store", JSON.stringify(storageObj));
};

export const getLocalStorageData = (): StorageData | null => {
  const strData = localStorage.getItem("store");

  if (strData) {
    const jsonData = JSON.parse(strData);
    return jsonData;
  }

  return null;
};

export const getDeclension = (quantity: number, variants: string[]): string => {
  const lastDigit = quantity % 10;
  const lastTwoDigits = quantity % 100;

  if (lastTwoDigits > 10 && lastTwoDigits < 14) {
    return variants[2];
  }

  if (lastDigit > 1 && lastDigit < 5) {
    return variants[1];
  }

  if (lastDigit === 1) {
    return variants[0];
  }

  return variants[2];
};

export const filterValueGuard = (value: string): value is FilterValue => {
  return FILTER_VALUE.includes(value);
};
