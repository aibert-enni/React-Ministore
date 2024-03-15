import { Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import { IRoute, ROUTES_PATHS } from "../router/types"
import Home from "./Home"
import Footer from "../components/Footer"
import Shop from "./Shop"

export const routes: IRoute[] = [
  {
    path: ROUTES_PATHS.HOME,
    element: <Home />
  },
  {
    path: ROUTES_PATHS.SHOP,
    element: <Shop />
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
