import { Route, Routes } from "react-router-dom"
import Header from "../components/header/Header"
import { IRoute, ROUTES_PATHS } from "../router/types"
import Home from "./Home"
import Footer from "../components/footer/Footer"
import Shop from "./Shop"
import Product from "./Product"

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
