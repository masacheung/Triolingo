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
      setMeanings(data.data);
      } 
    catch (error) {
      console.log(error);
    }
  };
    
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);


  return (
    <div className="dictionary-page">
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
    </div>
  );
}

export default DictionaryApi;
