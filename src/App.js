import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Card from "./components/Card/Card";
import React, { useState } from 'react'
import Wrapper from './components/Wrapper/index'
//import FilterSelector from './components/FilterSelector/FilterSelector'

import './App.css';

function App() {

  const [is_checked, set_is_checked] = useState(false);

  const selectFilter = () => {
    set_is_checked(!is_checked);
    //console.log(is_checked);
  }
  console.log(is_checked);
  return (
    <>

      <Header />
      <h3>Select if you would like your employees ordered alphabetically</h3>
      <div>
        <input checked={is_checked} onChange={selectFilter} type="checkbox" /><label>Name</label>
      </div>
      <Wrapper>
        <Card />
      </Wrapper>
      <Footer />

    </>
  )
}


export default App;
