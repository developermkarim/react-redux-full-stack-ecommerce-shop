import React, { useState } from 'react';
import {FaShoppingCart,FaTimes} from 'react-icons/fa'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom';
import styles from './header.module.scss';
const logo = (
    <div className={styles.logo}>
    <Link to='/'>
    <h2>
        e<span>Shop</span>.
    </h2>
    </Link>
</div>
)
const cart = (
    <span className={styles.cart}>
                <Link to='/cart'>
                    Cart <FaShoppingCart size={20}/>
                    
                </Link>
            </span>
)
const activeLink = ({isActive})=>(isActive ? `${styles.active}` :'');
const Header = () => {
    const [showMenu, setShowMenu] =  useState(false);
    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    }
    const hideMenu = ()=>{
        setShowMenu(false);
    }
    return (
        <header>
            <div className={styles.header}>
       {logo}
       {/* Nav bar Start Here */}
       <nav className={showMenu ? `${styles['show-nav']}`
        :
         `${styles['hide-nav']}` }>

        <div className={showMenu ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}` : `${styles['nav-wrapper']}`} onClick={hideMenu} >

        </div>
        
        <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color="#fff" onClick={hideMenu} />
              </li>
        <li>
            <NavLink  to='/'>Home</NavLink>
           
        </li>
        <li> <NavLink className={activeLink} to='/contact'>Contact Us</NavLink></li>
        </ul>
        <div className={styles['header-right']}>
            <span className={styles.links}>
                <NavLink  className={activeLink} to='/login'>
                login
                </NavLink>
                <NavLink   className={activeLink}  to='/register'>
                Register
                </NavLink>
                <NavLink  className={activeLink} to='/order-history'>
                My Orders
                </NavLink>
                
            </span>
            {cart}
        </div>
 
        <div className={styles['header-left']}></div>

        
       </nav>
       
{/* Nav Bar End  */}


       <div className={styles['menu-icon']}>
        
        {cart}
        <p>0</p>
        <HiOutlineMenuAlt3 size={20} onClick={toggleMenu}/>
       </div>
            </div>
        </header>
    );
};

export default Header;