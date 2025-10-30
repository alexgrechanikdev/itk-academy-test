import type { FC } from "react";
import { EPTY_LIST_TEXT } from "../../constants";
import type { FilterValue } from "../../types";
import "./styles.css";

interface IEmptyList {
  filterValue: FilterValue;
}

export const EmptyList: FC<IEmptyList> = ({ filterValue }) => {
  return <p className="empty_list">{EPTY_LIST_TEXT[filterValue]}</p>;
};
