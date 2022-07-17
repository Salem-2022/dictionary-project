import React from "react";

export default function Photos(props){
    if(props.photos){
        return (
            <div className="Photos">
                <div className="row m-0 pe-3">
                {props.photos.map(function(photo, index){
                   return (<div className="col-4" key={index}>
                    <a href={photo.src.original} target="_blank" rel="noreferrer">
                     <img src={photo.src.landscape} className="img-fluid border rounded m-2" alt="photos"/>            
                    </a>
               </div>
               );
               })}
                </div>
            </div>
        );
    }else{
        return null;
    }
    
}