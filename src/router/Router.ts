import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import { ROUTES_PATHS } from "./types";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "*",
    Component: App,
  },
  {
    path: ROUTES_PATHS.SIGN_UP,
    Component: SignUp
  },
  {
    path: ROUTES_PATHS.LOGIN,
    Component: Login
  }
]);
