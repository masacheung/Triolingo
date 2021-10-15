import React from "react";
import { addCard } from "../../util/card_api_util";

const Definitions = ({ meanings, word, category }) => {
  let createWord = "";
  let createdef = "";
  let createSyn = [];
  let createsrc = "";
  return (
    <div className="api-container">
      <div className="dictionary-meanings-container">
        {word === "" ? (<span className="subTitle">Search a word on the search bar</span>) : (
          meanings.map((mean, i) =>
          ( i < 1 ? (
            mean.meanings.map((item, i) =>
              item.definitions.map((def, i) => (
                (  i < 2 ? (<div className="singleMean">
                  {createWord = word}
                  {createdef = def.definition}
                  {createSyn.push(def.synonyms)}
                  <div className="definition">Definition: {def.definition}</div>
                  {def.example && (
                    <span>
                      <b>Example :</b> {def.example}
                      <br />
                    </span>
                  )}
                  {def.synonyms && (
                    <span>
                      <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                      <br />
                    </span>
                  )}
                </div>) : "")
              ))
            )) : "")
          )
        )}
        {meanings[0] && word && category === "en" && (
          <audio className="dictionary-audio" src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} controls>
            {createsrc = meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            Your browser does not support the audio element.
          </audio>
        )}
      </div>

      <div className="api-create-form">
        {word === "" ? "" : 
        (<div>
          <button className="api-create-button" onClick={() => addCard({title: createWord, definition: createdef, audio: createsrc})}>Create Flash Card</button>
        </div>)
        }
      </div>
    </div>
  );
};

export default Definitions;