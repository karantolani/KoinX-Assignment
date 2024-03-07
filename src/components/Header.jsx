import logo from "../assets/logo.svg";
import menuImg from "../assets/menu.svg";
import NavBar from "./NavBar";
import Button from "./Button";
import styles from "../styles/Header.module.css";


function Header() {
    return (
        <header>
            <img src={logo} alt="Logo"/>
            <NavBar />
            <Button text="Get Started" className={styles["btn-get-started"]}/>
            <img src={menuImg} className={styles["menu-img"]} />
        </header>
    )
}

export default Header;