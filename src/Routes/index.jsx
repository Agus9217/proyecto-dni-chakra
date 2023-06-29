import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Login } from "../components/Form/Login";
import { Register } from "../components/Form/Register";

export const initRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])