import styles from "../styles/Section.module.css";

function Section({heading, children}) {
    return (
        <div className={styles.section}>
            {heading && <h2>{heading}</h2>}
            {children}
        </div>
    )
}

export default Section;