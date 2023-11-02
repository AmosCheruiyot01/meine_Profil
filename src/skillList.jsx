import Skills from "./skills"

function SkillList({data}) {
    return(
     <div className="skill-list">
      {data.map((skill) => (
        <Skills skill = {skill.skill} emoji = {skill.emoji} color = {skill.color} level = {skill.level} key={skill.skill}/>
      ))}
     </div>
    )
  }

  export default SkillList