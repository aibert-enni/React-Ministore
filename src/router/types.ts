import { ReactElement } from "react";

export enum ROUTES_PATHS {
  HOME = "/",
  SHOP = "/shop",
  PRODUCT = "/product/:id",
  ABOUT = "/about"
}

export interface IRoute {
  path: ROUTES_PATHS;
  element: JSX.Element;
}
