import React from "react";
import {Link, useParams} from "react-router";

function Detail(props) {

    const  {id} = useParams();
    const  blogDetails = [
        {id:1, title:"react-router nedir ?",description:"React router açıklaması."},
        {id:2, title: "JavaScript nedir?",description:"Web Geliştirme için Kullanılır."},
        {id:3, title: "C++ nedir?",description:"Yüksek performanslı uygulamalar için Kullanılır."},
        {id:4, title: "Java nedir?",description:"Kurumsal uygulamalar için Kullanılır."},
        {id:5, title: "Python nedir?",description:"Yapay Zeka  için Kullanılır."},
    ];

    const  detail = blogDetails.find(blog => blog.id == id);

    if (!detail){
        return  (
            <div>
                <h1>İlgili blog bulunamadı.</h1>
                <Link to="/blogs" className="btn btn-primary">Anasayfaya git</Link>
        </div>
        )
    }

    return (
        <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">
                <h5 className="card-title">{detail.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Blog Id :{detail.id} </h6>
                <p className="card-text">{detail.description}</p>
                <Link to="/" className="btn btn-sm btn-outline-primary">Anasayfaya Dön</Link>
            </div>
        </div>
    );
}

export default Detail;
