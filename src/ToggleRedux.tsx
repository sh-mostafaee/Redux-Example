import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsHello } from "./Redux/modules/toggle";

export function ToggleRedux() {
  const state = useSelector((state: any) => state.toggle.value);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setIsHello(!state));
  };

  return <div onClick={handleClick}>{state ? "hello" : "bye"} redux</div>;
}
