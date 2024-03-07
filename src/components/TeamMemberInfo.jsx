import styles from "../styles/TeamMemberInfo.module.css";

function TeamMemberInfo({src, name}) {
    return (
        <div className={styles["team-member-info"]}>
            <img src={src}/>
            <p className={styles["about-para"]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus ea earum et molestias necessitatibus nesciunt nulla, rem ut voluptates? Aut enim, error eum illum laborum tenetur totam ut! Asperiores corporis cupiditate deserunt distinctio fugiat ipsa possimus, praesentium quas? Amet, ducimus exercitationem explicabo incidunt inventore ipsa itaque, laboriosam molestias, natus officiis perferendis quae ullam vel! Dicta doloremque magni sint voluptatum?</p>
            <h3>{name}</h3>
            <span>Designation here</span>
        </div>
    )
}

export default TeamMemberInfo;