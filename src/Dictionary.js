import React, { useState } from "react";
import axios from "axios";
import ImageOfSearchedWord from "./ImageOfSearchedWord"
import ResponseData from "./ResponseData";
import Photos from "./Photos";




import "./Dictionary.css";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("Flowers");
  let [responseData, setResponseData] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState("");
  let [photo, setPhoto] = useState("");

  
  function handleDictionaryResponse(response) {
    
    setResponseData(response.data[0]);
    
  }
  function handlePexelPhotoResponse(response){
    setPhoto(response.data.photos);
  }
  function handlePexelPhotosResponse(response){
    setPhotos(response.data.photos);
  }
function search(){
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    
    let pexelApiKey="563492ad6f917000010000018264f965bdbf4f75b908a0fafc52414e";
    let pexelPhotosApiUrl=`https://api.pexels.com/v1/search?query=${searchedWord}&per_page=9`;
    
    let headers={"Authorization" : `Bearer ${pexelApiKey}`};
    axios.get(pexelPhotosApiUrl,{ headers:headers}).then(handlePexelPhotosResponse);
   
    let pexelPhotoApiUrl=`https://api.pexels.com/v1/search?query=${searchedWord}&per_page=1`;
    axios.get(pexelPhotoApiUrl,{ headers:headers}).then(handlePexelPhotoResponse);
  
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
    <section  className="rounded">
      <ImageOfSearchedWord photo={photo}/>
      
      <form className="container form-group" onSubmit={formSubmit}>
        
        
        <input
          type="search"
          className="form-control"
          onChange={updateSearchedWord}
          placeholder=" ???? Search for a word"
        />

       
      </form>
      </section>
      <ResponseData responseData={responseData} />
      <Photos photos={photos} />
     
      <p className="text-center">Coded by Eyerusalem Birru, <a href="https://github.com/Salem-2022/dictionary-project" rel="noreferrer">open source code</a></p>
    </div>
  );

}else{
  load();
  return "Loading";
}
}