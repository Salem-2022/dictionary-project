import React from "react";

export default function ImageOfSearchedWord(props){
    if(props.photo){
        return (
            <section className="ImageOfSearchedWord  ">
               
                {props.photo.map(function(photo, index){
                   return (<div key={index}>
                    <a href={photo.src.original} target="_blank" rel="noreferrer">
                     <img src={photo.src.landscape} className="img-fluid border mx-auto d-block rounded m-3" width="100" alt="photos"/>            
                    </a>
               </div>
               );
               })}
   
            </section>
        );
    }else{
        return null;
    }
    
}