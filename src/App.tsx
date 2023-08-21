import React from "react";
import logo from "./logo.svg";
import { Toggle } from "./Toggle";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./Redux/Store";
import { toggleIsHello } from "./Redux/modules/toggle";
import { ToggleRedux } from "./ToggleRedux";

function App() {
  const state = useSelector((state: any) => state.toggle);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleIsHello());
  };

  return (
    <div>
      <div>
        <Toggle />
        <Toggle />
        <Toggle />
        <Toggle />
        <Toggle />
      </div>
      <hr />
      <hr />
      <ToggleRedux />
      <ToggleRedux />
      <ToggleRedux />
      <ToggleRedux />
      <ToggleRedux />
    </div>
  );
}

export default App;
