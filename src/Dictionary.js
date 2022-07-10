import React, { useState } from "react";
import axios from "axios";
import ResponseData from "./ResponseData";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("");
  let [responseData, setResponseData] = useState("");

  function handleResponse(response) {
    setResponseData(response.data[0]);
  }

  function formSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    axios.get(apiUrl).then(handleResponse);
    return "searching";
  }
  function updateSearchedWord(event) {
    setSearchedWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={formSubmit}>
        <input type="search" onChange={updateSearchedWord} />
        <button className="searchButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </form>

      <ResponseData responseData={responseData} />
      <p>The recently searched word is {searchedWord}</p>
    </div>
  );
}
