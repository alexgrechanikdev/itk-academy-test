import type { ISortingOption } from "./types";

export const SORTING_VARIANTS: ISortingOption[] = [
  {
    id: 1,
    label: "Все",
    value: "all",
  },
  {
    id: 2,
    label: "Активные",
    value: "active",
  },
  {
    id: 3,
    label: "Решённые",
    value: "resolved",
  },
];

export const EPTY_LIST_TEXT = {
  all: "У вас нет задач!",
  active: "У вас нет активных задач!",
  resolved: "У вас нет законченных задач!",
};

export const TASK_DECLENSION_VARIANT = ["задача", "задачи", "задач"];

export const TASK_LEFT_DECLENSION_VARIANT = [
  "Осталась",
  "Осталось",
  "Осталось",
];

export const FILTER_VALUE = ["all", "active", "resolved"];
