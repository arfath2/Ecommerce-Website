import classes from "./Footer.module.css"


const Footer =() =>{
    return <footer>
    <div className={classes["footer-title"]}>
        The Generics
    </div>
    <div className={classes["footer-icons"]}>
        <ul>
            <li><a>
                <img src="./img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt=""/>
            </a></li>
            <li><a>
                <img src="./img/Spotify Logo.png" alt=""/>
            </a></li>
            <li><a>
                <img src="./img/Facebook Logo.png" alt=""/>
            </a></li>
        </ul>
    </div>
</footer>
}

export default Footer;