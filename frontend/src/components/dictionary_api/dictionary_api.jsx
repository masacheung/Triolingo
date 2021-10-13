import { Container, Switch, withStyles } from "@material-ui/core";
import axios from "axios";
import Header from "./Header";
import { useEffect, useState } from "react";
import Definitions from "./Definitions";

const cors = require('cors');



const DictionaryApi = () => {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  // `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
  const dictionaryApi = async () => {
    // try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/language`
      )
      .then((response) => {
        console.log(response.data)
      })
      setMeanings(data.data); 
    // catch (error) {
    //   console.log(error);
    // }
    data.use(cors());
  };



  console.log('meanings: ');
  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);


  return (
    <div
      className="App"
      style={{
        height: "100vh",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
        >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
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
