import React from "react";

export default function Meaning(props) {
 
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
      
        if (index < 3){
        return (
          <div key={index}>
            <span>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <em className="text-muted">Example:{definition.example}</em> 
              <br />
            </span>
          </div>
        );
        } else { 
          return null;
        }
      })}
    </div>
  );
}
