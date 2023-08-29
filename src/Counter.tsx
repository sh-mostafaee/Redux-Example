import React, { ChangeEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  minusCounter,
  plusCounter,
  resetCounter,
  setCounter,
} from "./Redux/modules/Counter";
import { count } from "console";
import { setInput } from "./Redux/modules/input";

export function Container() {
  const state = useSelector((state: any) => state.counter.count);
  const input = useSelector((state: any) => state.input.value);

  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(plusCounter());
  };

  const handleMinus = () => {
    dispatch(minusCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  const handleSet = () => {
    dispatch(setCounter(Number(input)));
  };
  const handleChange = (e: any) => {
    dispatch(setInput(e.target.value));
  };
  return (
    <div>
      <button
        onClick={handlePlus}
        style={{
          border: "1px solid black ",
          margin: "5px",
          backgroundColor: "green",
        }}
      >
        plus
      </button>
      <button
        onClick={handleMinus}
        style={{
          border: "1px solid black",
          margin: "5px",
          backgroundColor: "red",
        }}
      >
        minus
      </button>
      <button
        style={{ border: "1px solid black", backgroundColor: "white" }}
        onClick={handleReset}
      >
        reset
      </button>

      <input value={input} onChange={handleChange} type="number" />
      <button onClick={handleSet}>set</button>
      <p>{state}</p>
    </div>
  );
}
