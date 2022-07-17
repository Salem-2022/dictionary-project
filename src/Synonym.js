import React from "react";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="Synonym">
        <strong>Synonyms :</strong>
        <ul>
        {props.synonym.map(function (synonym, index) {
          return (

            <li key={index} className="p-1 m-2 border rounded d-inline-block" >
              {synonym}
            </li>
          );
        })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
