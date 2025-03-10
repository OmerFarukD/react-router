import React, {useState} from 'react';
import {useNavigate} from "react-router";

function BlogForm({ addBlog }) {

    const  [id, setId] = useState(0);
    const  [title,setTitle] = useState('');

    const  navigate = useNavigate();

    const  handleSubmit = (e) => {
        e.preventDefault();
        const  newBlog = {id:id,title:title};
        addBlog(newBlog);
        setId(0)
        setTitle('')
        navigate('/blogs');
    }

    return (
        <form onSubmit={handleSubmit} style={{width:"50%"}}>
            <div className="mb-3">
                <label  className="form-label">Id</label>
                <input
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                    type="number"
                    className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    type="text"
                    className="form-control" />
            </div>
            <button type="submit" className="btn btn-outline-success ">Ekle</button>
            <button type="submit" className="btn btn-outline-primary mx-3">Anasayfaya git</button>
        </form>
    );
}

export default BlogForm;

