

import { Fragment } from "react";
import classes from "./Cart.module.css"

const Cart = () =>{
return <Fragment>
    <section id="cart" className={classes.container}>
            <h2>CART</h2>
            <button className={classes.cancel}>X</button>
            <div className={classes["cart-row cart-header"]}>
                <span className={classes['cart-item cart-column']}>ITEM</span>
                <span className={classes['cart-price cart-column']}>PRICE</span>
                <span className={classes['cart-quantity cart-column']}>QUANTITY</span>
            </div>
            <div className={classes['cart-items']}>
                 <div className={classes["cart-row"]}>
                    <span className={classes['cart-item cart-column']}>
                        <img className={classes['cart-img']} src="img/Shirt.png" alt="" />
                        <span>T-Shirt</span>
                    </span>
                    <span className={classes['cart-price cart-column']}>$19.99</span>
                    <span className={classes['cart-quantity cart-column']}>
                        <input type="text" />
                        <button>REMOVE</button>
                    </span>
                </div>
                <div className={classes["cart-row"]}>
                    <span className={classes['cart-item cart-column']}>
                        <img className={classes['cart-img']} src="img/Shirt.png" alt="" />
                        <span>T-Shirt</span>
                    </span>
                    <span className={classes['cart-price cart-column']}>$9.99</span>
                    <span className={classes['cart-quantity cart-column']}>
                        <input type="text" />
                        <button>REMOVE</button>
                    </span>
                </div> 
            </div>
            <div className={classes["cart-total"]}>
                <span>
                    <span className={classes['total-title']}> <strong>Total</strong>
                        </span>
                    $<span id='total-value'>0</span>
                </span>
            </div>
            <button className={classes['purchase-btn']} type='button'>PURCHASE</button>
        </section>
</Fragment>
}

export default Cart;