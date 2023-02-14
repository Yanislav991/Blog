import axios from "axios";
import authService from "./authService";

const API_URL = "http://localhost:3001/api/blogs/";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

class BlogService {
  create(blog) {
    return axios.post(API_URL, blog, {
      headers:{
        'Authorization': authService.getCurrentUser()
      }
    });
  }
  async get() {
    return await axios.get(API_URL);
  }
  async getById(id){
    return await axios.get(API_URL + id)
  }
}

export default new BlogService();
