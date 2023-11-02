
function Skills({skill, emoji, color, level}) {

    return(
      <div className='skill' style={{backgroundColor: color}}> 
        <span>{skill}</span>
        <span>{emoji}</span>
        <span>
          {level === "beginner" && <span>😒</span>}
          {level ==="intermediate" && <span>😊</span>}
          {level ==="advanced" && <span>✌️</span>}
        </span>
  
      </div>
    )
  }

  export default Skills