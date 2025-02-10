import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SingleJobPage from "./pages/SingleJobPage"
import AddJobForm from "./pages/AddJobForm"
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<SingleJobPage />} />
        <Route path="/addjob" element={<AddJobForm />} />
      </Routes>
    </>
  )
}
export default App