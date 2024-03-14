import { Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import { ROUTES } from "../router/types"
import Home from "./Home"
import Footer from "../components/Footer"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
