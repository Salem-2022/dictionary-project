import React from "react";
import Meaning from "./meaning";
import Synonym from "./Synonym";
import Phonetics from "./Phonetics";

export default function ResponseData(props) {

  if (props.responseData) {

    return (
      <div className=" ResponseData">
       
        <section  >
        <h2 className="text-capitalize text-center display-2 font-weight-bold">{props.responseData.word}</h2>
        <Phonetics phonetics={props.responseData.phonetics}/>
      </section>
      
      
      
        {props.responseData.meanings.map(function (meaning, index) {
          return ( 
            <div key={index}>
              
            
            <section className=" border rounded">
            
           
            <Meaning meaning={meaning} />
              <br />
            
              <Synonym synonym={meaning.synonyms} />
              <br />
             
            </section>

  
            
          </div>
          
          );
        })}
      </div>
      
    );
  } else {
    return null;
  }
}
