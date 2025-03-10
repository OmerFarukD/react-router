import React from 'react';


const  blogs = [
    {id:1, title:'React router nedir?'},
    {id:2, title:'JavaScript nedir?'},
    {id:3, title:'C++ nedir?'},
    {id:4, title:'Java  nedir?'},
    {id:5, title:'Python nedir?'},
]
function BlogList(props) {
    return (
        <>
            <table className="table table-info table-striped table-hover ">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Başlık</th>

                </tr>
                </thead>
                <tbody>

                {
                    blogs.map((blog) => (

                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.title}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            <a href className="btn btn-outline-success">Ekle</a>
        </>

    );
}

export default BlogList;
