import { useForm } from "react-hook-form";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
  };
  return (
    <div className="signup-form-wrapper">
      <h3 className="sign-up-form-header">Sign Up</h3>
      <div className="form-image-wrapper">
        <img src="/images/signUp.svg" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-body">
        <div className="email">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: true, maxLength: 10 })}
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
        <div className="confirm-password">
          <label className="form-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
                return true;
              },
            })}
            className="form-input"
            type="password"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p>Please check if the Passwords match!</p>
          )}
        </div>
        <div className="form-footer">
          <button className="main-button" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
