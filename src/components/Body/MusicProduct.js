import { Fragment } from "react";
import classes from "./MusicProduct.module.css"


const productsArr = [
    {
      album: "Album 1",
      title: "POP Music",
      price: 100,
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/29/01/22/album-1866523_960_720.jpg",
    },
  
    {
      album: "Album 2",
      title: "Instrumental",
      price: 50,
      imageUrl: "https://cdn.pixabay.com/photo/2014/06/04/17/53/piano-362251_960_720.jpg",
    },
  
    {
      album: "Album 3",
      title: "POP",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
  
    {
      album: "Album 4",
      title: "Soft Music",
      price: 100,
      imageUrl: "https://cdn.pixabay.com/photo/2016/01/10/21/05/mic-1132528_960_720.jpg",
    },
  ];


const MusicProduct = () =>{
    return <Fragment>
        
        <section className={classes.container}>
            <h2>MUSIC</h2>
            {productsArr.map((items) => {
                return (
                <div key={items.album} id ="music-content">
                    <h3>{items.album}</h3>
                    <div className={classes["image-container"]}>
                        <img className={classes["prod-images"]} src={items.imageUrl} alt="" />
                    </div>
                    <div class="prod-details">
                        <span><span>{items.title} : ${items.price}</span></span>
                        <button className={classes["shop-item-button"]} type='button'>ADD TO CART</button>
                    </div>
                </div>)
                })} 
                
        </section>
    </Fragment>
}

export default MusicProduct;