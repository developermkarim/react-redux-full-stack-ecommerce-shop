import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import styles from './auth.module.scss'
import registerImg from '../../assets/register.png'
import Card from '../card/Card';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {auth}  from '../../firebase/firebase.config'
import Loader from '../../components/loader/Loader';
const Register = () => {
   const [email,Setemail] = useState("")
   const [password,Setpassword
] = useState("")
   const [cPassword,cSetPassword
] = useState("")
   const [isLoading,setIsLoading
] = useState(false);

const navigate = useNavigate();
const registerUser = (ev) =>{
ev.preventDefault();
console.log(email,password,cPassword);
if(password !== cPassword){
toast.error('Password do not match');
}

setIsLoading(true);
/* Register google firebase auth */
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    setIsLoading(false);
    toast.success("Registration SUccessfull...");
    navigate("/login");
  })
  .catch((error) => {
   
    const errorMessage = error.message;
    toast.error(errorMessage);
    setIsLoading(false);
  });

}
        return <>
        <ToastContainer/>
        {isLoading && <Loader/>}
         <section className={`container ${styles.auth}`}>
       
<Card>
<div className={styles.form}>
    <h2>SIGN UP</h2>
    <form action="" onSubmit={registerUser}>
        <input type="email" name="" required placeholder='email' id="" value={email} onChange={(e)=>Setemail(e.target.value)}/>
        <input type="password" name="password" required placeholder='Password' id="con-password" value={password} onChange={(e)=>Setpassword(e.target.value)}/>

        <input type="password" name="con-password" required placeholder='Confirm Password' id="" value={cPassword} onChange={(e)=>cSetPassword(e.target.value)}/>
        
        <button type='submit' className='--btn --btn-primary --btn-block'>sign up</button>
        {/* <div className={styles.links}>
            <Link to='/reset'>Reset Password</Link>
        </div> */}
        <br />
    </form>
    <button className='--btn --btn-danger --btn-block'> <FaGoogle color='#fff'/>&nbsp; Sign Up With Google </button>
    <span> Already Have an account ? &nbsp; &nbsp;</span>
    <Link to='/register'> Sign In</Link>
</div>

      </Card> 

    <div className={styles.img}>
    <img src={registerImg} alt="register" width={400} />
    </div>  

        </section>
        </>
  
};

export default Register;