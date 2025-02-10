import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SingleJobPage from "./pages/SingleJobPage"
import Form from "./ui/Form"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<SingleJobPage />} />
      </Routes>
      <Form />
    </>
  )
}
export default App