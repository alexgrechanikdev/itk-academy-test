import type { ChangeEvent, FC } from "react";
import type { ISortingOption } from "../../types";
import { useToDoStore } from "../../store";
import { filterValueGuard } from "../../utils";
import "./styles.css";

interface ISelectProps<T> {
  options: T[];
}
export const Select: FC<ISelectProps<ISortingOption>> = ({ options }) => {
  const { changeFilterValue, filterValue } = useToDoStore((state) => state);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (filterValueGuard(e.target.value)) {
      changeFilterValue(e.target.value);
    }
  };

  return (
    <select
      name="select_sort"
      id="sort"
      className="select_sort"
      value={filterValue}
      onChange={handleChange}
    >
      {options.map(({ id, label, value }) => (
        <option
          key={`${id}-${value}`}
          value={value}
          className="select_sort_option"
        >
          {label}
        </option>
      ))}
    </select>
  );
};
