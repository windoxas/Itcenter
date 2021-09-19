import React from 'react'
import './UserStyle.css'

function UserSigin() {

    const [selCourse, setSelCourse] = React.useState('')

    function SelectCourses (){
        return(
            <select  defaultValue ={selCourse} name="category" onChange={(e) => setSelCourse(e.target.value)}>
                    <option disabled={true}>Выбирить курс</option>
                    <option value="Komp" >Компюьтерная грамотность</option>
                    <option value="web">Веб программирование</option>
                    <option value="mobil">Создание мобилньных приложения</option>
                    <option value="WebDesign">Веб дизайн</option>
                    <option value="Design">Графический дизайн</option>
                    <option value="MobileRoboto">мобилньная робототехника</option>
                    <option value="GameSport">Киберспорт</option>
                    <option value="ItEnglish">IT-English</option>
                
                </select>
        )
    }

    return (
        <div className="user">
            <form action="" className="formData">
                <label htmlFor="">Фамиля</label>
                <input type="text"  placeholder="Имронов"/>
                
                <label htmlFor="">Имя</label>
                <input type="text"  placeholder="Имрон"/>
                <label htmlFor="">Телефон номер</label>
                <input type="text"  placeholder="+998 (90) 577-77-87" />
                <label htmlFor="">фотография </label>
                <input type="file"  />
                <label htmlFor="">Выбирить курс</label>
                <SelectCourses/>
            <input className="btn" type="submit" value="Отправить" />
            </form>
        </div>
    )
}


export default UserSigin;
