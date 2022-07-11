import React from "react";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="Synonym">
        <strong>Synonyms :</strong>
        {props.synonym.map(function (synonym, index) {
          return (
            <span key={index} className="p-2 m-2 border rounded">
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
