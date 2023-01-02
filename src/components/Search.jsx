import React, { useState} from "react";

const SearchBar = (props) => {
  return <input type="search" onChange={props.onUpdateSearch} />;
}

const Overview = ({currentTerm}) => {
    return <p>Currently searching for {currentTerm}</p>
}

export default function Search(){
    const [searchTerm,setSearchTerm] = useState("");
    function updateSearchTermHandler(event){
        setSearchTerm(event.target.value);
    }
    return(
            <div>
              <SearchBar onUpdateSearch={updateSearchTermHandler} />
              <Overview  currentTerm={searchTerm} />
            </div>
    )
}