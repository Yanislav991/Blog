import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import blogService from "../../services/blogService";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const [blog, setBlog] = useState({
        title: "",
        body: "",
        userEmail: "",
    });
    const { id } = useParams();


    const navigate = useNavigate();
    const onSubmit = (data, e) => {
        try {
            console.log(data)
            blogService.update(data);
            navigate("/blogs");
        } catch(err) { 
            console.log(err)
            console.log("An error has occurred!")
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            const blogData = await blogService.getById(id);
            return blogData;
        };
        fetchData()
            .then((res) => {
                setBlog(res.data.data);
                console.log(blog)
            })
            .catch(console.error);

        if (blog) {
          Object.entries(blog).forEach(
            ([name, value]) => setValue(name, value));
        }
    }, [blog.title]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-body">
            <div className="title">
                <label className="form-label" htmlFor="title">
                    Title
                </label>
                <input
                    {...register("title", { required: true, maxLength: 50 })}
                    className="form-input"
                    placeholder="Title"
                />
                {errors.title && (
                    <p>Title max size is 50 characters. It cannot be empty</p>
                )}
            </div>
            <div className="body">
                <label className="form-label" htmlFor="body">
                    Body
                </label>
                <textarea
                    rows="10"
                    {...register("body", { required: true })}
                    className="form-input"
                    placeholder="Write the content here!"
                />
                {errors.body && <p>Body is required.</p>}
            </div>
            <div className="image">
                <label className="form-label" htmlFor="image">
                    Image Url
                </label>
                <input
                    {...register("image", { required: false })}
                    className="form-input"
                    placeholder="The image will be displayed above the content of the blogpost."
                />
            </div>
            <div className="form-footer">
                <button className="main-button" type="submit">
                    Edid
                </button>
            </div>
        </form>
    )
}

export default EditBlog;