import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import DataFetching from "./components/DataFetching/DataFetching";
import React from 'react'

import './App.css';

function App() {
  // const [results, setResults] = useState([])
  // // const [filter, setFilter] = useState("")
  // // const [filteredResults, setFilteredResults] = useState([])
  // // const [error, setError] = useState("")

  // useEffect(() => {
  //   // For demonstration purposes, we mock an API call.
  //   API.getUsers().then((res) => {
  //     console.log(res)
  //     setResults(res.data.results)
  //     //  setDeveloperState(res);
  //     // console.log("Developer State:");
  //     // console.log(developerState);
  //   });
  // }, []);

  return (
    <>
      <Header />
      <DataFetching />
      <Footer />
    </>
  )
}


export default App;
