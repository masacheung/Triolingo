import { Container, Switch, withStyles } from "@material-ui/core";
import axios from "axios";
import Header from "./Header";
import { useEffect, useState } from "react";
import Definitions from "./Definitions";


const DictionaryApi = () => {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  // const dictionaryApi = async () => {
  //   const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
  //   .then((response) => {response.json()})
  //   .catch ((error) => {console.log(error)})
  // };
  
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        // http://localhost:5000
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`, {
          method: 'GET',
          mode: 'no-cors',
          crossorigin:true,
          credentials: 'same-origin'
        }
        );
        setMeanings(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    console.log(meanings);
    
    useEffect(() => {
      dictionaryApi();
    }, [word, category]);


    return (
    <div
      className="App"
      style={{
        height: "120vh",
        transition: "all 0.3s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "120vh",
          justifyContent: "space-evenly",
        }}
        >
        <div
          style={{ position: "relative", top: 0, right: 15, paddingTop: 10 }}
        >
        
        </div>
        <Header
          setCategory={setCategory}
          setWord={setWord}
          category={category}
          word={word}
          setMeanings={setMeanings}
        />
        {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            category={category}
          />
        )}
      </Container>
    </div>
  );
}


export default DictionaryApi;
