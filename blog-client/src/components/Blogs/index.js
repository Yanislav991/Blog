import React, { useEffect, useState } from "react";
import blogService from "../../services/blogService";

const Blogs = () => {
  const [blogs, setblogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const blogs = await blogService.get();
      return blogs;
    };

    fetchData()
      .then((res) => {
        setblogs(res.data.data);
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
        <li key={item}></li>
      ))}
    </ul>
  );
};

export default Blogs;
