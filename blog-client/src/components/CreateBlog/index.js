import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import blogService from "../../services/blogService";

const CreateBlogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data, e) => {
    try {
      blogService.create(data);
      navigate("/blogs");
    } catch {}
  };
  return (
    <div className="create-blog-form-wrapper">
      <h3 className="create-blog-form-header">Create Blog</h3>
      <p>
        Welcome to our blog post creation page! Here, you can share your
        thoughts, ideas, and experiences with the world through the power of
        writing. Our user-friendly interface makes it easy for you to create a
        visually appealing and well-structured blog post in just a few clicks.
        <br />
        All you need is an idea and a desire to share it with the world. Whether
        you're an aspiring blogger or a seasoned pro, our platform is the
        perfect place to express yourself and connect with others. So why wait?
        Start writing your next blog post today and reach a worldwide audience
        with the click of a button!
      </p>
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
        <div className="imageUrl">
          <label className="form-label" htmlFor="imageUrl">
            Image Url
          </label>
          <input
            {...register("imageUrl", { required: false })}
            className="form-input"
            placeholder="The image will be displayed above the content of the blogpost."
          />
        </div>
        <div className="form-footer">
          <button className="main-button" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogForm;
