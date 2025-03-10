import React from 'react';

function BlogForm(props) {
    return (
        <form style={{width:"50%"}}>
            <div className="mb-3">
                <label  className="form-label">Id</label>
                <input type="number" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-outline-success ">Ekle</button>
            <button type="submit" className="btn btn-outline-primary mx-3">Anasayfaya git</button>
        </form>
    );
}

export default BlogForm;

