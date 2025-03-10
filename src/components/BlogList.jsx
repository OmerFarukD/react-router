import React from 'react';
import {Link} from "react-router";



function BlogList({ blogs }) {



    return (
        <>
            <table className="table table-info table-striped table-hover ">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Başlık</th>
                    <th scope="col">İşlemler</th>

                </tr>
                </thead>
                <tbody>

                {
                    blogs.map((blog) => (

                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.title}</td>
                            <td><Link to={`/blogs/${blog.id}`}>Detaya Git</Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            <Link to="/blog/add" href className="btn btn-outline-success">Ekle</Link>
        </>

    );
}

export default BlogList;
