import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInputValue } from "../Redux/modules/todo";

export function Input() {
  const [value, setValue] = useState("");

  const state = useSelector((state: any) => state.todo.searchInput);

  const dispatch = useDispatch();

  return (
    <input
      value={state}
      onChange={(e) => dispatch(setSearchInputValue(e.target.value))}
    />
  );
}
