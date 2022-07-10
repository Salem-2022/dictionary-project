import React from "react";
import Meaning from "./meaning";

export default function ResponseData(props) {
  //let firstLetterCapital = props.responseData.word.charAt(0).toUpperCase();
  //let restLettersLower = props.responseData.word.slice(1).toLowerCase();
  if (props.responseData) {
    return (
      <div className="ResponseData">
        <h2>{props.responseData.word}</h2>
        {props.responseData.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
