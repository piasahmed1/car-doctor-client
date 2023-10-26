import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheackOut from "../Pages/CheackOut/CheackOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: 'cheackout/:id',
        element: <CheackOut></CheackOut>,
        loader: ({params}) => fetch(`http://localhost:5173/services/${params.id}`)
      }
      
    ],
  },
]);

export default router;
