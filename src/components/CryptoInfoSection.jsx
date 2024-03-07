import Section from "./Section";
import styles from "../styles/CryptoInfoSection.module.css";
import bitcoinImg from "../assets/bitcoin-logo.svg";
import Chart from "./Chart";
import {useEffect, useState} from "react";
import commaNumber from "comma-number";

const COIN_GECKO_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true";

function CryptoInfoSection() {
    const [cryptoInfo, setCryptoInfo] = useState({
        dollarValue: 0,
        rupeeValue: 0,
        usdChangeIn24h: 0,
        positiveGrowth: true
    });

    useEffect(() => {
        fetch(COIN_GECKO_URL)
            .then(res => res.json())
            .then(data => {
                const bitcoinData = data.bitcoin;

                setCryptoInfo({
                    dollarValue: bitcoinData.usd,
                    rupeeValue: bitcoinData.inr,
                    usdChangeIn24h: bitcoinData.usd_24h_change,
                    positiveGrowth: bitcoinData.usd_24h_change >= 0
                })
            })
    }, []);

    return (
        <Section>
            <div className={styles["cryptoinfo-section-header"]}>
                <img src={bitcoinImg} />
                <h3>Bitcoin</h3>
                <span className={styles["crypto-abbr"]}>BTC</span>
                <span className={styles["crypto-rank"]}>Rank #1</span>
            </div>
            <div className={styles["crypto-value-section"]}>
                <span className={styles["dollar-value"]}>${commaNumber(cryptoInfo.dollarValue)}</span>
                <span className={`${styles["text-growth"]} ${cryptoInfo.positiveGrowth ? styles.positive: styles.negative}`}>{cryptoInfo.positiveGrowth ? "▲" : "▼"} {cryptoInfo.usdChangeIn24h.toFixed(2)}%</span>
                <span>(24H)</span>
                <span className={styles["rupee-value"]}>₹{commaNumber(cryptoInfo.rupeeValue)}</span>
            </div>
            <hr/>
            <Chart />
        </Section>
    )
}

export default CryptoInfoSection;