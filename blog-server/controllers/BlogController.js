const blogService = require("../services/BlogService");
const { fetchUserByToken } = require("../services/UserService");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBlog = async (req, res) => {
  fetchUserByToken(req)
    .then(async (user) => {
      try {
        console.log(user)
        req.body.userEmail = user.email
        const blog = await blogService.createBlog(req.body);
        res.json({ data: blog, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    })
    .catch((err) => {
      res
        .status(401)
        .json({ error: "You have to be logged in to create new record!" });
    });
};

exports.getBlogById = async (req, res) => {
  fetchUserByToken(req)
    .then(async (user) => {
      try {
        const blog = await blogService.getBlogById(req.params.id);
        res.json({ data: blog, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    }).catch((err) => {
      console.log(err)
      res
        .status(401)
        .json({ error: "You have to be logged to get this resource!" });
    });

};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  fetchUserByToken(req)
    .then(async (user) => {
      try {
        const creatorEmail = await blogService.getBlogById(req.params.id).userEmail;
        if (creatorEmail !== user.email) {
          res.status(401).json("You have to own this post to delete it!");
          return;
        }
        const blog = await blogService.deleteBlog(req.params.id);
        res.json({ data: blog, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    }).catch((err) => {
      console.log(err)
      res
        .status(401)
        .json({ error: "You have to be logged to delete this resource!" });
    });
};
