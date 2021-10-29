import React, { useEffect, useState } from 'react';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
        })
    }, [])
    
    return (
        <div className="container my-5">
            <div className="section-header">
                <h3>Latest Blog</h3>
                <p>Our moderator write blog for you</p>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        blogs.map(blog => 
                        <div key={blog._id} className="col">
                            <div className="card border-0 shadow-lg mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0 d-flex align-items-center">
                                <div className="col-md-4">
                                <img src={blog.img} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title.slice(0, 30)}</h5>
                                    <p className="card-text">{blog?.description?.slice(0, 70)} <a href="/">Read more</a></p>
                                    <div>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;