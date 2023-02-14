import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogService from "../../services/blogService";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({
        title:"",
        body: "",
        createdAt: "",
        userEmail: "",
        id:""
    });
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const blogData = await blogService.getById(id);
            return blogData;
        };
        fetchData()
            .then((res) => {
                setLoading(false);
                setBlog(res.data.data);
                console.log(blog)
            })
            .catch(console.error);
    }, [blog.title]);
    if (loading) {
        return <p>Data is loading...</p>;
    }
    return (
        <article className="blog-details">
            <h3 className="blog-details-title">{blog.title}</h3>
            <p className="blog-details-date">Created At: {new Date(blog.createdAt).toLocaleDateString()}</p>
            <p className="blog-details-author">Author: {blog.userEmail}</p>
            <br/>
            <div className="blog-details-image-wrapper">
                <img src={blog.image}/>
            </div>
            <br/>
            <section className="blog-body">
                <p>
                    {blog.body}
                </p>
            </section>
        </article>
    )
}

export default BlogDetails;