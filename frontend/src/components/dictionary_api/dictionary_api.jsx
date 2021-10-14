import { Container, Switch, withStyles } from "@material-ui/core";
import axios from "axios";
import Header from "./Header";
import { useEffect, useState } from "react";
import Definitions from "./Definitions";
import { green } from "@material-ui/core/colors";

const DictionaryApi = () => {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

 
  const dictionaryApi = async () => {
    try {
      const data = await axios({
        url: `https://sheltered-savannah-55294.herokuapp.com/https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`,
        method: 'GET'
      })
      console.log("object.entries:");
      console.log(Object.entries(data.data));
      setMeanings(data.data);
      } 
    catch (error) {
      console.log(error);
    }
  };
    
  console.log(meanings);
    
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);


  return (
    <div
      className="dictionary-page"
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
          style={{ position: "relative", top: 0, right: 0, paddingTop: 10 }}
        >
        
        </div>
        <Header
          className='dictionary-header'
          setCategory={setCategory}
          setWord={setWord}
          category={category}
          word={word}
          setMeanings={setMeanings}
        />
        {meanings && (
          <Definitions
            className='dictionary-meanings'
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
