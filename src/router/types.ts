export enum ROUTES_PATHS {
  HOME = "/",
  SHOP = "/shop",
  PRODUCT = "/product/:id",
  ABOUT = "/about",
  CART = "/cart",
  CHECKOUT = "/checkout",
  LOGIN = "/login",
  SIGN_UP = "/signUp"
}

export interface IRoute {
  path: ROUTES_PATHS;
  element: JSX.Element;
}
