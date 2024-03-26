export enum ROUTES_PATHS {
  HOME = "/",
  SHOP = "/shop",
  PRODUCT = "/product/:id",
  ABOUT = "/about",
  CART = "/cart"
}

export interface IRoute {
  path: ROUTES_PATHS;
  element: JSX.Element;
}
