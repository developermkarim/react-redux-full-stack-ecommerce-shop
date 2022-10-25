import React from 'react';
import { Link } from 'react-router-dom';
import styles from './auth.module.scss'
import resetImg from '../../assets/forgot.png'
import Card from '../card/Card';
const Reset = () => {
    return  <section className={`container ${styles.auth}`}>
       
<div className={styles.img}>
    <img src={resetImg} alt="Login" width={400} />
</div>
<Card>
<div className={styles.form}>
    <h2>Reset Password</h2>
    <form action="">
        <input type="email" name="" required placeholder='Name' id="" />
       
        
        <button className='--btn --btn-primary --btn-block'>Reset Password</button>
        <div className={styles.links}>
            
       
        <p> <Link to='/login'> Sign In </Link></p>
    <p><Link to='/register'> Sign Up </Link></p>
    </div>
    </form>
   
  
</div>

      </Card>    

        </section>
};

export default Reset;