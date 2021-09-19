import React from 'react'
import './listStyle.css'
import axios from 'axios'
import AppContext from '../../context'
export default function GameSport() {
    const {district} = React.useContext(AppContext)
    const [gameCourses, setGameCourses] = React.useState([])
    React.useEffect(()=> {
        async function fetchData(){
          const pc_lesson = await axios(`http://localhost:3004/${district}GameSport`)
  
  
  
          setGameCourses(pc_lesson.data)
         }
  
         fetchData()
          
      },[gameCourses, district])
    return (
        <div className="gameSport">
            {gameCourses.map((item) =>{
                return (
                    <ul key={item.id}>
                    <li>{item.name}</li>
                    <li>{item.courses}</li>
                    
                    </ul>
                )
            })}
        </div>
    )
}
