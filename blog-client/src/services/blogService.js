import axios from "axios";
import authService from "./authService";

const API_URL = "http://localhost:3001/api/blogs/";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

class BlogService {
  update(blog) {
    return axios.put(API_URL + blog._id, blog, {
      headers: {
        'Authorization': authService.getCurrentUser()
      }
    });
  }
  create(blog) {
    return axios.post(API_URL, blog, {
      headers: {
        'Authorization': authService.getCurrentUser()
      }
    });
  }
  async get() {
    return await axios.get(API_URL);
  }
  async getById(id) {
    return await axios.get(API_URL + id, {
      headers: {
        'Authorization': authService.getCurrentUser()
      }
    })
  }
  async delete(id) {
    return await axios.delete(API_URL + id, {
      headers: {
        'Authorization': authService.getCurrentUser()
      }
    })
  }
}

export default new BlogService();
