import React from 'react'
import axios from 'axios'
import AppContext from '../../context'
import './listStyle.css'

function KompyuterGrama() {
    const {district}  = React.useContext(AppContext)
    const [courses, setCourses] = React.useState([])

    React.useEffect(()=> {
      async function fetchData(){
        const pc_lesson = await axios(`http://localhost:3004/${district}KompyuterGrama`)



        setCourses(pc_lesson.data)
       }

       fetchData()
        
    },[courses,district])
    return (
        <div className="pc_gram">
            {courses.map((item) =>{
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


export default KompyuterGrama;