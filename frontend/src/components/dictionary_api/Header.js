import TextField from "@material-ui/core/TextField";
import React from "react";
import { debounce } from "lodash";

const Header = ({
  category,
  setCategory,
  setWord,
  word,
  setMeanings,
}) => {
  

  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    setMeanings([]);
    console.log(e.target.value)
  };

    const handleText = debounce((text) => {
    setWord(text);
  }, 500);

  return (
    <div className="header">
      <span className="title">{word ? word : ""}</span>
      <div className="inputs">
          <TextField
            className="search"
            id="filled-basic"
            // value={word}
            label="Search a Word"
            onChange={(e) => handleText(e.target.value)}
          /> 
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
            className="select"
          >
            <option value="en">English</option>
            <option value="ko">Korean</option>
            <option value="ja">Japanese</option>
            <option value="es">Spanish</option>
          </TextField>
      </div>
    </div>
  );
};

export default Header;
