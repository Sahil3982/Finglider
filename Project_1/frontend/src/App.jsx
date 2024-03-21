import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Finglider from "./Pages/Finglider"
import About from "./Pages/About"
import Navbar from "./Components/Navbar"
import Contact from "./Pages/Contact"
import Homebtn from "./Pages/Homebtn"
import Summery from "./Pages/Summery"
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Finglider />}></Route>
          <Route path="/home" element={<Homebtn />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/summary" element={<Summery />}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
