import './App.css'
import BlogList from "./components/BlogList.jsx";
import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import BlogDetails from "./components/BlogDetails.jsx";

function App() {
  return (
    <div className="container">
        <Navbar/>
        <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetails/>} />
        </Routes>
    </div>
  )
}

export default App
