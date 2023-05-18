import React, { Fragment } from 'react';
import mealsImage from '../../assets/React_Header.png';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props)=>{
    return(
        <Fragment>
            <header classname={classes.header}>
                {/* <h1>ReactMeals</h1> */}
                <HeaderCartButton/>
                {/* <button>Cart</button> */}
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt= 'A table full of delicious food!'/>
            </div>
        </Fragment>
    );
};
export default Header;