import React from 'react'
import './district.css'
import AppContext from '../../context'
import {Link} from 'react-router-dom'
function District() {

       

    const {district,onSelectDistrict} = React.useContext(AppContext)
        
    function Select() {
        return(
            <div className="district">
             <select   defaultValue={district} onChange={(e) =>  onSelectDistrict(e.target.value)}>
                <option value="" disabled={true}  >Выбирить Район</option>
                <option value="TermezCity" >Термиз шахар</option>
                <option value="Angor">Ангор</option>
                <option value="Sherobod" >Шеробод</option>
                <option value="Jarkurgan">Жаркурган</option>
                <option value="Kumkurgan">Кумкурган</option>
                <option value="Shurchi">Шурчи</option>
                <option value="Denov">Денов</option>
                <option value="Sarosiya">Саросия</option>
                <option value="Oltinsoy">Олтинсой</option>
                <option value="termizDistrict">Термиз тумани</option>
                </select>

            <Link to={district}><button className="districtBtn">Выбирить Район</button></Link>
        </div>
        )
    }

    return (
        <Select/>
    )
}


export default District
