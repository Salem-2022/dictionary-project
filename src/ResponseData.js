import React from "react";
import Meaning from "./meaning";
import Synonym from "./Synonym";
import Phonetics from "./Phonetics";

export default function ResponseData(props) {
  //let firstLetterCapital = props.responseData.word.charAt(0).toUpperCase();
  //let restLettersLower = props.responseData.word.slice(1).toLowerCase();
  if (props.responseData) {
    
    return (
      <div className="ResponseData">
        <h2>{props.responseData.word}</h2>
        <Phonetics phonetics={props.responseData.phonetics}/>
        {props.responseData.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
              <Synonym synonym={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
