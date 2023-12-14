import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../photos/a9119eedd8d56fa764cc1f151e2c5ac0.png";
import './header.css';
const HeaderComponent = () =>{
    return(
        <div className='header-container'>
            <img className='logo' src={logo} alt='logo' />
            <div className='pages'>
            <Link to="/main">მთავარი</Link>
            <Link to="/about">ჩვენს შესახებ</Link>
            <Link to="/">კონტაქტი</Link>
            <Link to="/">ავტორიზაცია</Link>


            </div>
        </div>
    )
}
export default HeaderComponent;