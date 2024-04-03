import { Route, Routes } from "react-router-dom"
import Header from "../components/header/Header"
import { IRoute, ROUTES_PATHS } from "../router/types"
import Home from "./Home"
import Footer from "../components/footer/Footer"
import Shop from "./Shop"
import Product from "./Product"
import About from "./About"
import Cart from "./Cart"
import Checkout from "./Checkout"
import { useEffect } from "react"
import { User } from "../models/User"

export const routes: IRoute[] = [
  {
    path: ROUTES_PATHS.HOME,
    element: <Home />
  },
  {
    path: ROUTES_PATHS.SHOP,
    element: <Shop />
  },
  {
    path: ROUTES_PATHS.PRODUCT,
    element: <Product />
  },
  {
    path: ROUTES_PATHS.ABOUT,
    element: <About />
  },
  {
    path: ROUTES_PATHS.CART,
    element: <Cart />
  },
  {
    path: ROUTES_PATHS.CHECKOUT,
    element: <Checkout />
  }
];

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(route =>
          <Route path={route.path} element={route.element} />
        )}
      </Routes>
      <Footer />
    </>
  )
}

export default App
