import React from 'react';
import styles from './auth.module.scss'
import loginImg from '../../assets/login.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Card from '../card/Card';
const Login = () => {
    return  <section className={`container ${styles.auth}`}>
       
<div className={styles.img}>
    <img src={loginImg} alt="Login" width={400} />
</div>
<Card>
<div className={styles.form}>
    <h2>Login</h2>
    <form action="">
        <input type="text" name="" required placeholder='Name' id="" />
        <input type="password" name="" required placeholder='Password' id="" />
        
        <button className='--btn --btn-primary --btn-block'>Login</button>
        <div className={styles.links}>
            <Link to='/reset'>Reset Password</Link>
        </div>
        <p>-- or --</p>
    </form>
    <button className='--btn --btn-danger --btn-block'><FaGoogle color='#fff'/> Login With Google</button>
    <span> don't have an acccount ? &nbsp; &nbsp;</span>
    <Link to='/register'> Sign Up Now </Link>
</div>

      </Card>    

        </section>
    
};

export default Login;