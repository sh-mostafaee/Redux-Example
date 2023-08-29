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
} from "./Redux/modules/todo";
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

// const students = [
//   {
//     id: 1,
//     firstName: "shiva",
//     lastName: "mostafaee",
//     score: 20,
//     birthdate: "1997-02-28",
//     groupId: 1,
//   },
//   {
//     id: 2,
//     firstName: "hamed",
//     lastName: "navvabian",
//     score: 20,
//     birthdate: "1997-04-21",
//     groupId: 1,
//   },
//   {
//     id: 3,
//     firstName: "oskol",
//     lastName: "navvabian",
//     score: 4,
//     birthdate: "1997-07-10",
//     groupId: 2,
//   },
//   {
//     id: 4,
//     firstName: "manzoreh",
//     lastName: "sorikhastegian",
//     score: 5,
//     birthdate: "1997-07-10",
//     groupId: 4,
//   },
// ];

// const groups = [
//   { id: 1, title: "maths" },
//   { id: 2, title: "physics" },
//   { id: 3, title: "chemistry" },
// ];

// console.log(students);

// const addedScoreStudents = students.map((student) => {
//   console.log(student, "injaseshgham");
//   if (student.score < 10) {
//     return {
//       ...student,
//       score: student.score + 5,
//     };
//   }
//   return student;
// });

// console.log(addedScoreStudents, "<=== addedScoreStudents");

// const studentFullNames = students.map(
//   (student) => `${student.firstName} ${student.lastName}`
// );
// console.log(studentFullNames, "<== studentFullNames");

// const scores = students.map((student) => student.score);
// console.log(scores);
// const studentsWidthGroups = students.map((student: any) => {
//   const group = groups.find((group) => {
//     return student.groupId === group.id;
//   });
//   return {
//     ...student,
//     group,
//   };
// });

// const products = [
//   {
//     id: 1,
//     title: "iPhone 12",
//     price: 1199,
//     inventory: 10,
//   },
//   {
//     id: 2,
//     title: "iPhone 13",
//     price: 1399,
//     inventory: 2,
//   },
//   {
//     id: 3,
//     title: "iPad Mini 6",
//     price: 999,
//     inventory: 0,
//   },
//   {
//     id: 4,
//     title: "Samsung S22 plus",
//     price: 899,
//     inventory: 12,
//   },
//   {
//     id: 5,
//     title: "Xiaomi X22",
//     price: 699,
//     inventory: 2,
//   },
// ];

// const cart = [
//   {
//     productId: 1,
//     quantity: 2,
//   },
//   {
//     productId: 2,
//     quantity: 1,
//   },
//   {
//     productId: 3,
//     quantity: 3,
//   },
//   {
//     productId: 4,
//     quantity: 1,
//   },
//   {
//     productId: 1,
//     quantity: 1,
//   },
//   {
//     productId: 5,
//     quantity: 3,
//   },
// ];

// // total price ?
// const cartPrices = cart.map((cartItem) => {
//   const product = products.find((product) => product.id === cartItem.productId);
//   console.log(product, "inahaaaaaaaa");
//   if (!product) {
//     return 0;
//   }
//   if (cartItem.quantity <= product.inventory) {
//     return cartItem.quantity * product.price;
//   }
//   if (product.inventory === 0) {
//     return 0;
//   }
//   if (cartItem.quantity > product.inventory) {
//     return product.inventory * product.price;
//   }
// });

// let totalPrice = 0;
// for (const item of cartPrices) {
//   totalPrice += item as number;
// }
// console.log(totalPrice);

// const pictures = [
//   {
//     id: 1,
//     width: 200,
//     height: 200,
//   },
//   {
//     id: 2,
//     width: 300,
//     height: 200,
//   },
//   {
//     id: 4,
//     width: 1024,
//     height: 1024,
//   },
//   {
//     id: 3,
//     width: 500,
//     height: 500,
//   },
// ];

// // 1) Which items are square?
// // 2) If we render all the images in a row, how much width and height would it take?
// // 3) Which one has the most resolution?
// // 4) Which one has the less resolution?
// const squares = pictures.map((picture) => picture.width === picture.height);
// console.log(squares);

// let total = 0;
// let prevHeight = 0;
// for (const picture of pictures) {
//   total += picture.width;
//   if (picture.height >= prevHeight) {
//     prevHeight = picture.height;
//   }
// }

// const finalRenderDimension = {
//   width: total,
//   height: prevHeight,
// };
