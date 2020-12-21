import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import API from "./utils/API";
import React, { useState, useEffect } from 'react'

import './App.css';

function App() {
  const [employee, setEmployeeState] = useState({

  })

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    API.getUsers().then((res) => {
      console.log(res)
      //  setDeveloperState(res);
      // console.log("Developer State:");
      // console.log(developerState);
    });
  }, []);



  return (
    <>
      <Header />
      <Footer />

    </>
  )
}

export default App;
