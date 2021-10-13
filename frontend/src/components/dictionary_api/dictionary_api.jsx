import { Container, Switch, withStyles } from "@material-ui/core";
import axios from "axios";
import Header from "./Header";
import { useEffect, useState } from "react";
import Definitions from "./Definitions";

// const cors = require('cors');



const DictionaryApi = () => {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  // `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
  const dictionaryApi = async () => {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      )
      .then((data) => {
        console.log(Object.values(data.data));
      })
      .catch ((error) => {console.log(error)})
  };

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
