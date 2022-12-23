import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "~/pages/Game";
import Start from "~/pages/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);

export default router;
