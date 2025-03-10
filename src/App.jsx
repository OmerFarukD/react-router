import './App.css'
import BlogList from "./components/BlogList.jsx";
import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Detail from "./components/Detail.jsx";
import BlogForm from "./components/BlogForm.jsx";
import {useState} from "react";

function App() {
    const  [blogs,setBlogs] = useState( [
        {id:1, title:'React router nedir?'},
        {id:2, title:'JavaScript nedir?'},
        {id:3, title:'C++ nedir?'},
        {id:4, title:'Java  nedir?'},
        {id:5, title:'Python nedir?'},
    ])
    const addBlog = (blog)=>{
        setBlogs([...blogs,blog])
    }

  return (
    <div className="container">

        <Navbar/>

            <Routes>
                <Route path="/" element={<BlogList blogs = {blogs} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<BlogList blogs = {blogs} />} />
                <Route path="/blogs/:id" element={<Detail />} />
                <Route path="blog/add" element={<BlogForm addBlog={addBlog} />} />
            </Routes>
    </div>
  )
}

export default App
