import React, { Fragment } from "react";
import classes from "./Header.module.css"

const Header = () =>{
    return <Fragment>
        <div >
        <header>
            <ul className={classes.header}>
                <li><a >HOME</a></li>
                <li><a >STORE</a></li>
                <li><a >ABOUT</a></li>
                <a className={classes["cart-holder"]}>cart<span className={classes['cart-number']}>0</span></a>
            </ul>
            <h1>The Generics</h1>   
        </header>
        </div>
           </Fragment>
}

export default Header;