import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./Pages/About"
import Navbar from "./Components/Navbar"
import Contact from "./Pages/Contact"
import Homebtn from "./Pages/Homebtn"
import Summery from "./Pages/Summery"
import Dashboard from "./Pages/Dashboard"
import Footer from "./Components/Footer"
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homebtn />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/summary" element={<Summery />}></Route>
        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default App
