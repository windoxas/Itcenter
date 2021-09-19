import React from 'react'
import './category.css'




import {Link} from 'react-router-dom'
import AppContext from '../../context'
import Computer from './icons category/monitor.png'
import Web from './icons category/web-programming.png'
import Mobile from './icons category/mobile-phone.png'
import WebDesign from './icons category/website.png'
import Design from './icons category/computer.png'
import MobileRobot from './icons category/smartphone.png'
import Sport from './icons category/video-game.png'
import English from './icons category/translation.png'
function Category() {
    const {district} = React.useContext(AppContext)
    return (
        <>
        <h1>Вибиритие учебный программа</h1>
        <div className="category">
            
           <Link to={`/${district}/KompyuterGrama`}> <div value> <span> <img src={Computer} alt="Product"/></span> Компюьтерная грамотность</div></Link>
           <Link to={`/${district}/Web`}> <div> <span> <img src={Web} alt="Product"/></span> Веб программирование</div></Link>
           <Link to={`/${district}/Mobile`}><div> <span> <img src={Mobile} alt="Product"/></span> Создание мобилньных приложения </div></Link>
           <Link to={`/${district}/WebDesign`}><div> <span> <img src={WebDesign} alt="Product"/></span> Веб дизайн </div></Link>
           <Link to={`/${district}/Design`}> <div> <span> <img src={Design} alt="Product"/></span> Графический дизайн </div></Link>
           <Link to={`/${district}/MobileRoboto`}> <div> <span> <img src={MobileRobot} alt="Product"/></span> мобилньная робототехника </div></Link>
           <Link to={`/${district}/GameSport`}> <div> <span> <img src={Sport} alt="Product"/></span> Киберспорт </div></Link>
           <Link to={`/${district}/English`}> <div> <span> <img src={English} alt="Product"/></span> IT-English </div></Link>
        </div>

        
        </>
    )
}

export default Category
