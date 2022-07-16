import React, { useState } from "react";
import axios from "axios";
import ResponseData from "./ResponseData";




import "./Dictionary.css";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("Flower");
  let [responseData, setResponseData] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    
    setResponseData(response.data[0]);
   
    
  }
  
function search(){
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    axios.get(apiUrl).then(handleResponse);
    return "searching";
}
  function formSubmit(event) {
    event.preventDefault();
    search();
    
  }
  function updateSearchedWord(event) {
    setSearchedWord(event.target.value);
  }
  function load(){
    setLoaded(true);
    search();
  }
  
  if(loaded){
  return (
    <div className="Dictionary border rounded">
      <form className="container form-group" onSubmit={formSubmit}>
        
        <div className="row mt-5">
          <div className="col">
        <input
          type="search"
          className="form-control"
          onChange={updateSearchedWord}
          placeholder=" 🔍 Search for a word"
        />

        </div> 
         </div>
      </form>

      <ResponseData responseData={responseData} />
     
      <p className="text-center">Coded by Eyerusalem Birru, <a href="https://github.com/Salem-2022/dictionary-project">open source code</a></p>
    </div>
  );

}else{
  load();
  return "Loading";
}
}