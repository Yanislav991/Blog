import React, { useEffect, useState } from "react";
import blogService from "../../services/blogService";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService"
import BlogListItem from "../BlogListItem";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const blogs = await blogService.get();
      return blogs;
    };
    fetchData()
      .then((res) => {
        console.log(res)
        setBlogs(res.data.data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <ul>
      {blogs.map((item) => (
        <BlogListItem item={item} />
      ))}
    </ul>
  );
};

export default Blogs;
