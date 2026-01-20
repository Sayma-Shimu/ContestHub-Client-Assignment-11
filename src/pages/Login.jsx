import { use, useState, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../components/provider/AuthProvider';
import { useLocation, useNavigate, Link } from 'react-router';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState('');
  const { signin, signInWithGoogle, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signin(email, password)
      .then(res => {
        const user = res.user;
        setUser(user);
        toast.success("Login successful");
        navigate(`${location.state ? location.state : '/'}`);
        form.reset();
        setError('');
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
        setError(errorCode);
      });
  };

  // 🔥 Role Based Demo Login with Your Real Credentials
  const handleDemoLogin = (role) => {
    let demoEmail = "";
    let demoPassword = "";

    if (role === "participant") {
      demoEmail = "participant@demo.com";
      demoPassword = "Parti@123";
    }

    if (role === "creator") {
      demoEmail = "kamal@uddin.com";
      demoPassword = "KAMAl@123";
    }

    if (role === "admin") {
      demoEmail = "sun@flower.com";
      demoPassword = "SUn@1234";
    }

    // Auto fill inputs
    emailRef.current.value = demoEmail;
    passwordRef.current.value = demoPassword;

    signin(demoEmail, demoPassword)
      .then(res => {
        const user = res.user;
        setUser(user);
        toast.success(`${role.toUpperCase()} Demo Login successful`);
        navigate(`${location.state ? location.state : '/'}`);
        setError('');
      })
      .catch(error => {
        toast.error(error.code);
        setError(error.code);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        const name = user.displayName;
        const photo = user.photoURL;
        const email = user.email;
        const role = 'participant';

        axios.post('https://contesthub-steel.vercel.app/users', { name, photo, email, role })
          .then(() => {
            navigate(`${location.state ? location.state : '/'}`);
            setUser(user);
            toast.success('Google Sign-In successful');
          })
          .catch(() => {
            navigate(`${location.state ? location.state : '/'}`);
            setUser(user);
            toast.success('Google Sign-In successful');
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <title>Login</title>

      <div className="hero min-h-screen w-full">
        <div className="hero-content w-full flex justify-center">

          {/* Bigger Card */}
          <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-6">
            <h1 className="font-semibold text-3xl text-center mb-4">
              Login to Your Account
            </h1>

            <form onSubmit={handleLogin} className="card-body space-y-3">
              <fieldset className="fieldset">

                {/* Email */}
                <label className="label font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                  ref={emailRef}
                />

                {/* Password */}
                <div className="relative">
                  <label className="label font-medium">Password</label>
                  <input
                    name="password"
                    type={toggle ? 'text' : 'password'}
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                    required
                    ref={passwordRef}
                  />
                  <div
                    className="absolute bottom-3.5 right-3 cursor-pointer text-lg"
                    onClick={handleToggle}
                  >
                    {toggle ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>

                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}

                {/* Normal Login */}
                <button
                  type="submit"
                  className="btn bg-blue-700 hover:bg-blue-600 text-white w-full mt-3"
                >
                  Login
                </button>

                {/* Demo Login Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin("participant")}
                    className="btn bg-green-600 hover:bg-green-500 text-white"
                  >
                    Demo Participant
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDemoLogin("creator")}
                    className="btn bg-purple-600 hover:bg-purple-500 text-white"
                  >
                    Demo Creator
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDemoLogin("admin")}
                    className="btn bg-red-600 hover:bg-red-500 text-white"
                  >
                    Demo Admin
                  </button>
                </div>

                <p className="text-center font-bold my-2">OR</p>

                {/* Google Login */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn bg-white text-black border border-gray-300 w-full flex gap-2"
                >
                  <svg
                    aria-label="Google logo"
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                      <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                      <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                      <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                    </g>
                  </svg>
                  Login with Google
                </button>

                {/* Register */}
                <p className="text-center pt-4">
                  Do not have an account?{" "}
                  <Link to="/auth/register" className="text-secondary font-semibold">
                    Register
                  </Link>
                </p>

              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
