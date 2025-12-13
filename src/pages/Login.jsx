
import { use } from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../components/provider/AuthProvider';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const Login = () => {

  const [toggle, setToggle] = useState(false)
  const [error, setError] = useState('')
  const { signin, signInWithGoogle, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle)
  }


  const emailRef = useRef()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password })

    signin(email, password)
      .then(res => {
        const user = res.user
        setUser(user)
        navigate(`${location.state ? location.state : '/'}`)
        form.reset()
      })
      .catch((error) => {
        const errrorCode = error.code;
        toast.error(errrorCode)
        setError(errrorCode);
      })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user)
        setUser(user)
        navigate(`${location.state ? location.state : '/'}`)

        setTimeout(() => {
          window.location.reload()
        }, 1000)
        toast.success('You have logged in succesfully!')
      })
      .catch((error) => {
        const errrorCode = error.code;

        setError(errrorCode);
      })
  }


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <title>Login</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className='font-semibold text-2xl text-center '>Login your account</h1>
            <form onSubmit={handleLogin} className="card-body">

              <fieldset className="fieldset">

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" required ref={emailRef} />


                <div className='relative'>
                  <label className="label">Password</label>
                  <input name='password' type={toggle ? 'text' : 'password'} className="input" placeholder="Password" required />
                  <div className='absolute bottom-3.5 right-3' onClick={handleToggle}>{toggle ? <FaEyeSlash /> : <FaEye />}</div>

                </div>

                <div>
                  <a className='link link-hover'>Forgot password?</a>
                </div>

                {error && <p className='text-red-600 text-xs'> {error} </p>}

                <button type='submit' className="btn bg-blue-800 hover:bg-blue-500 mt-4 text-white"> Login</button>
                <p className='text-center font-bold'>Or</p>
                <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>

                <p className='text-center py-5'>Do not Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link></p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Login