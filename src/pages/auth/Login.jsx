import Lottie from "react-lottie";
import loginLottie from "../../assets/lottie files/login.json"
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const {googleLogin} = useContext(AuthContext);
  // Handle Google Login
  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      console.log(result.user);
      alert("Successfully Logged by Google!");
    })
    .catch(error => {
      console.log(error.message);
    })
  }
  // Handle email & password login
  const handleUserLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  }


  // using lottie file
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <Lottie options={defaultOptions} />
        </div>
        <div className="card w-full flex-1">
          <div className="card-body -mb-5 text-center">
            <h5 className="text-blue-600 font-semibold">Welcome back!</h5>
            <h2 className="text-4xl font-semibold">Member Login</h2>
            <p className="text-gray-600 mb-4">Access to all features. No credit card required.</p>
            <button onClick={handleGoogleLogin} className="btn btn-outline border-gray-300"><FcGoogle size={24} /> Sign in with Google</button>
          </div>
          <div className="divider px-8">OR</div>
          <form onSubmit={handleUserLogin} className="card-body -mt-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;