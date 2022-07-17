import React from "react";

export default function Meaning(props) {
 
  return (
    <div className="Meaning">
      
     <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
      
        if (index < 3){
        return (
        
          <section key={index}>
             
              <strong>Definition :</strong> {definition.definition}
              <br />
              <em className="text-muted">Example :{definition.example}</em> 
              <br />
          
            </section>
          
        );
        } else { 
          return null;
        }
      })}
    </div>
     
  );
}
