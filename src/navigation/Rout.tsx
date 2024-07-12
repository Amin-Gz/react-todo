import NotFound from "../components/pages/NotFound";
import Todo from "../components/pages/Todo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo></Todo>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
function Rout() {
  return <RouterProvider router={router} />;
}
export default Rout;
