import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addName,
  deleteName,
  editName,
  generateNames,
  resetNames,
  setAddInputValue,
  setEditError,
  setError,
  setSearchInputValue,
} from "../Redux/modules/todo";
import { group } from "console";

const characterError = "character is greater than ten";

export function TodoApp() {
  const { searchInput, addInput, names, error } = useSelector(
    (state: any) => state.todo
  );
  const dispatch = useDispatch();

  const handleSearchChange = (e: any) => {
    dispatch(setSearchInputValue(e.target.value));
  };
  const handleAddChange = (e: any) => {
    dispatch(setAddInputValue(e.target.value));
  };

  const handleSubmitName = (e: any) => {
    e.preventDefault();
    console.log(addInput);
    if (addInput.length > 10) {
      dispatch(setError(characterError));

      return;
    }

    const found = names.find((name: any) => name.value === addInput.trim());

    if (found) {
      dispatch(setError(`${found.value} is duplicated `));
    } else {
      dispatch(addName(addInput.trim()));
    }
  };

  const handleGenerate10Name = () => {
    dispatch(generateNames());
  };
  const handleResetName = () => {
    dispatch(resetNames());
  };
  const handleDeleteName = (name: string) => {
    dispatch(deleteName(name));
  };
  const handleEditName = (id: string, newName: string) => {
    if (newName.length > 10) {
      dispatch(setEditError(id, characterError));
    }
    dispatch(editName(id, newName));
  };

  const filteredNames = searchInput
    ? names.filter((name: any) => name.value.includes(searchInput))
    : names;

  return (
    <div>
      <div className="name-list">Name List</div>

      <input
        className="input-search"
        placeholder="Search Name here..."
        value={searchInput}
        onChange={handleSearchChange}
      />
      <div className="hide" />
      <form onSubmit={handleSubmitName}>
        <input
          className="input-search"
          placeholder="Type name to add..."
          value={addInput}
          onChange={handleAddChange}
        />
        <p className="error-input">{error}</p>
      </form>

      <div className="names-container">
        {filteredNames.length ? (
          <ol>
            {filteredNames.map((name: any, i: number) => (
              <li key={i}>
                <input
                  value={name.value}
                  onChange={(e) => handleEditName(name.value, e.target.value)}
                />
                <button onClick={() => handleDeleteName(name.value)}>
                  Delete
                </button>
                <p className="error-input">{name.error}</p>
              </li>
            ))}
          </ol>
        ) : (
          "no names"
        )}
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={handleGenerate10Name}>Generate 10 names</button>

        <button onClick={handleResetName}>Reset names</button>
      </div>
    </div>
  );
}
