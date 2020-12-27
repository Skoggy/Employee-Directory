import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Card from "./components/Card/Card";
import React from 'react'
import Wrapper from './components/Wrapper/index'
//import FilterSelector from './components/FilterSelector/FilterSelector'

import './App.css';

function App() {

  return (
    <>

      <Header />

      <Wrapper>
        <Card />
      </Wrapper>
      <Footer />

    </>
  )
}


export default App;
