import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SingleJobPage from "./pages/SingleJobPage"
import AddJobForm from "./pages/AddJobForm"
import { Toaster } from "react-hot-toast"
import EditJobForm from "./pages/EditJobForm"
const App = () => {
  return (
    <>
      <Toaster position="bottom-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<SingleJobPage />} />
        <Route path="/addjob" element={<AddJobForm />} />
        <Route path="/editjob" element={<EditJobForm />} />
      </Routes>
    </>
  )
}
export default App