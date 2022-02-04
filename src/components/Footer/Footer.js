import classes from "./Footer.module.css"


const Footer =() =>{
    return <footer>
    <div className={classes["footer-title"]}>
        The Generics
    </div>
    <div className={classes["footer-icons"]}>
        <ul>
            <li><a>
                <img src="https://www.sendwithus.com/assets/img/emailmonks/images/yt.png" alt=""/>
            </a></li>
            <li><a>
                <img src="https://www.sendwithus.com/assets/img/emailmonks/images/insta.png/" alt=""/>
            </a></li>
            <li><a>
                <img src="https://www.sendwithus.com/assets/img/emailmonks/images/fb.png" alt=""/>
            </a></li>
        </ul>
    </div>
</footer>
}

export default Footer;