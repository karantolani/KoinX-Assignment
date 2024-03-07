import Section from "./Section";
import TeamMemberInfo from "./TeamMemberInfo";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";

function TeamSection() {
    return (
        <Section heading="Team">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aperiam architecto eligendi incidunt magni nemo obcaecati quia quod ratione?</p>
            <TeamMemberInfo name="John Smith" src={person1}/>
            <TeamMemberInfo name="Elina Williams" src={person2}/>
            <TeamMemberInfo name="John Smith" src={person3}/>
        </Section>
    )
}

export default TeamSection;