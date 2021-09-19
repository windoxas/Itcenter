import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import UserSigin from './components/UserSigin/UserSigin';
import District from './components/District/District';
import Category from './components/Category/Category';


// Courses import
import KompyuterGrama from './components/pages/KompyuterGrama'
import Web from './components/pages/Web'
import Mobile from './components/pages/Mobile'
import WebDesign from './components/pages/WebDesign'
import Design from './components/pages/Design'
import MobileRoboto from './components/pages/MobileRoboto'
import GameSport from './components/pages/GameSport'
import English from './components/pages/English'




// Couurses import
import AppContext from './context'

function App() {


  const [district, setDistrict] = React.useState(localStorage.getItem('district'))
  
  const onSelectDistrict = (e) => {
    setDistrict(e)
    localStorage.setItem('district', e)
}

  return (
    <AppContext.Provider value={{district, onSelectDistrict} } >
    <div className="App">
       <Route path="/" ><Header/>  </Route>
       <Route path="/" exact><District/> </Route>
       <Route path={district ? `/${district}` : '/localAll'} exact><Category/> </Route>
       {/* <Route path={`/${district}/:slug`} excet> <Student/></Route> */}
       <Route path={`/${district}/KompyuterGrama`} exact><KompyuterGrama/></Route>
       <Route path={`/${district}/Web`} exact><Web/></Route>
       <Route path={`/${district}/Mobile`} exact><Mobile/></Route>
       <Route path={`/${district}/WebDesign`} exact><WebDesign/></Route>
       <Route path={`/${district}/Design`} exact><Design/></Route>
       <Route path={`/${district}/MobileRoboto`} exact><MobileRoboto/></Route>
       <Route path={`/${district}/GameSport`} exact><GameSport/></Route>
       <Route path={`/${district}/English`} exact><English/></Route>


      <Route path="/sigin" exact><UserSigin/></Route>
    </div>
    </AppContext.Provider>
  );
}

export default App;
