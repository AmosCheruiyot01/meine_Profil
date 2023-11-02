import React, { useEffect, useState } from 'react'
import './app.css'
import Intro from './intro';
import SkillList from './skillList';
import { skills } from './DBskills';


function App() {
const [data, setData] = useState([])

async function Fetcher(){
  const res = await fetch("http://localhost:3000/skills")
  const data = await res.json()
  setData(data)
}

useEffect(() => {
  Fetcher()
}, [])

console.log(data)

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList data = {skills} />
      </div>
    </div>
  );
}

function Avatar() {
  return(
    <img src = './2nd.jpg' alt = 'me'  className='avatar'/>

  )
}






export default App
