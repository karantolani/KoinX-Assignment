import styles from "../styles/GetStarted.module.css";
import Button from "./Button";
import arrowImg from "../assets/arrow-narrow-right.svg";
import getStartedImg from "../assets/get_started_img.svg";

function GetStartedForFree() {
    return (
        <div className={styles["get-started-container"]}>
            <h2>Get Started with KoinX <br /> for FREE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt pariatur porro quam repellendus soluta. Dolor ea enim fugiat harum, laboriosam nihil, nulla perferendis recusandae sapiente totam, ullam voluptas. Numquam, qui.</p>
            <img src={getStartedImg} className={styles["get-started-img"]}/>
            <Button text="Get Started for FREE" className={styles["btn-get-started"]} img={arrowImg}/>
        </div>
    )
}

export default GetStartedForFree;