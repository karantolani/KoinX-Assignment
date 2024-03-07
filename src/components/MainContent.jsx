import styles from "../styles/MainContent.module.css";
import AboutBitcoinSection from "./AboutBitcoinSection";
import GetStartedForFree from "./GetStartedForFree";
import TokenomicsSection from "./TokenomicsSection";
import TeamSection from "./TeamSection";
import CryptoInfoSection from "./CryptoInfoSection";

function MainContent() {
    return (
        <div className={styles.main}>
            <div className={styles["left-wrapper"]}>
                <p className={styles["crypto-para"]}>Cryptocurrencies >> <span className={styles["crypto-highlight"]}>Bitcoin</span></p>
                <CryptoInfoSection />
                <AboutBitcoinSection />
                <TokenomicsSection />
                <TeamSection />
            </div>
            <div className={styles["right-wrapper"]}>
                <GetStartedForFree />
            </div>
        </div>
    )
}

export default MainContent;