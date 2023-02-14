import { useForm } from "react-hook-form";
import authService from "../../services/authService";
import { useNavigate  } from "react-router-dom";
import { useGlobalState } from "../GlobalStateProvider";

function Login() {
  const [state, dispatch] = useGlobalState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data, e) => {
    try {
      authService.login(data.email, data.password).then((res) => {
        if (res.data?.error) {
          alert(res.data.error);
        } else {
          localStorage.setItem("token", res.token);
          dispatch({isUserLoggedIn: true, userEmail: data.email})  
          navigate("/blogs")
        }
      });
    } catch {
      alert("Invalid data you cannot register!");
    }
  };
  return (
    <div className="login-form-wrapper">
      <h3 className="login-form-header">Login</h3>
      <div className="form-image-wrapper">
        <img src="/images/login.png" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-body">
        <div className="email">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: true, maxLength: 25 })}
            className="form-input"
            placeholder="Email"
          />
          {errors.email && <p>Please check the Email. It cannot be empty!</p>}
        </div>
        <div className="password">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", { required: true })}
            className="form-input"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p>Please check the Password. It cannot be empty!</p>
          )}
        </div>
        <div className="form-footer">
          <button className="main-button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
