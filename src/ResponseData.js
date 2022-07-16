import React from "react";
import Meaning from "./meaning";
import Synonym from "./Synonym";
import Phonetics from "./Phonetics";

export default function ResponseData(props) {

  if (props.responseData) {

    return (
      <div className="container ResponseData">
        <div className="row">
        <div className="col">
        <h2 className="text-capitalize text-center display-2 font-weight-bold">{props.responseData.word}</h2>
        <Phonetics phonetics={props.responseData.phonetics}/>
      </div>
      </div>
      
      
        {props.responseData.meanings.map(function (meaning, index) {
          return ( 
            <div key={index}>
              
            <div className="row">
            <div className="col border rounded">
            
           
            <Meaning meaning={meaning} />
              <br />
              <Synonym synonym={meaning.synonyms} />
              <br />
             
            </div>

            </div>
            
          </div>
          
          );
        })}
      </div>
      
    );
  } else {
    return null;
  }
}
