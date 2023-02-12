import axios from "axios";

const API_URL = "http://localhost:3001/api/blogs/";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

class BlogService {
  create(blog) {
    return axios.post(API_URL, blog);
  }
  async get() {
    return await axios.get(API_URL);
  }
}

export default new BlogService();
