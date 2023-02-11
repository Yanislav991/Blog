import axios from "axios";

const API_URL = "http://localhost:3001/api/auth/";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("token", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("token");
  }

  register(email, password) {
    return axios.post(API_URL + "signUp", {
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("token"));
  }
}

export default new AuthService();
