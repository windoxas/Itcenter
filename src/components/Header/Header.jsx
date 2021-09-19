import React from 'react'
import {Link} from 'react-router-dom'



import './Header.css'
import Logo from './logo-park.png'
import search from './search.svg'
import AppContext from '../../context'


function Header() {

    const {district} = React.useContext(AppContext)

    const [searchPanel, setSeachPanel] = React.useState(false)
    
    const DistrictRus = [
        {
            TermezCity:"Термиз шахар",
            Angor:"Ангор",
            Sherobod:"Шеробод",
            Jarkurgan:"Жаркурган",
            Kumkurgan:"Кумкурган",
            Shurch:"Шурчи",
            Denov:"Денов",
            Sarosiya:"Саросия",
            Oltinsoy:"Олтинсой",
            termizDistrict:"Термиз тумани"
        }
        
    ]

    const onChangeSearchPanel = () =>{
        setSeachPanel(!searchPanel)
    }

    return (
        <div className="header">
            <div className="logo">
              <Link to="/"> <img src={Logo} alt="Logo" /></Link>
            </div>

            <div className="name_center">
                <h3>{DistrictRus[0][district]}</h3>
            </div>

            <div className="search">
                <input className={searchPanel ? "searchActive": "searchInput"} type="text" placeholder="Найти" />
                <img onClick={ onChangeSearchPanel} src={search} alt="search" />
            </div>

            <div className="users">
               <Link to="sigin"> <p>Регистиратция</p></Link>
            </div>
        </div>
    )
}

export default Header
