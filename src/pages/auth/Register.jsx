import Lottie from "react-lottie";
import registerLottie from "../../assets/lottie files/register.json"
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Register = () => {
  const { newUserCreate, setLoading } = useContext(AuthContext);

  // Handle Google Login
  const handleGoogleSignUp = () => {
  }
  // Handle email & password login
  const handleUserRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (passwordRegex.test(password)) {
      // user creation
      newUserCreate(email, password)
        .then(result => {
          console.log(result.user);
          if (result.user) {
            alert("User registered successfully");
          }
        })
        .catch(error => {
          console.log(error.message);
        })
    }
    else{
      alert("Password must have at least one uppercase letter, one number, one special character, and be at least 6 characters long.")
      return
    }
  }





  // using lottie file
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: registerLottie,
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
            <h5 className="text-blue-600 font-semibold">Register</h5>
            <h2 className="text-4xl font-semibold">Start your Journey Today</h2>
            <p className="text-gray-600 mb-4">Access to all features. No credit card required.</p>
            <button className="btn btn-outline border-gray-300"><FcGoogle size={24} /> Sign up with Google</button>
          </div>
          <div className="divider px-8">OR continue with</div>
          <form onSubmit={handleUserRegister} className="card-body -mt-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
            </div>
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
              <button className="btn btn-accent text-white text-base font-medium ">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;