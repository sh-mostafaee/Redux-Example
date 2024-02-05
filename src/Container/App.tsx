import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { TodoApp } from "./TodoApp";
import { Toggle } from "../Toggle";
import { ToggleRedux } from "../ToggleRedux";
import { FetchUsers } from "./FetchApp";
import { Container } from "./Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <div>
          <Link to="todo-list">todo list</Link>
        </div>
        <div>
          <Link to="toggle">toggle</Link>
        </div>
        <div>
          <Link to="toggle-redux">toggle Redux</Link>
        </div>
        <div>
          <Link to="fetch-users">fetch users</Link>
        </div>
        <div>
          <Link to="container">container</Link>
        </div>
      </div>
    ),
  },
  {
    path: "todo-list",
    element: <TodoApp />,
  },
  {
    path: "toggle",
    element: <Toggle />,
  },
  {
    path: "toggle-redux",
    element: <ToggleRedux />,
  },
  {
    path: "fetch-users",
    element: <FetchUsers />,
  },
  {
    path: "container",
    element: <Container />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
