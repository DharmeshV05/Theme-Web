import React, { useRef } from 'react';

const SearchBar = () => {
  const searchInputRef = useRef(null);

  const handleGoogleSearch = () => {
    const query = searchInputRef.current.value;
    if (query) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  return (
    <div id="search-container" style={{ marginTop: "5%" }}>
      <div id="search-input-container">
        <img src="https://assets.codepen.io/1468070/Google+G+Icon.png" alt="" />
        <input type="text" placeholder="Search anything" id="search" ref={searchInputRef} />
      </div>
      <button id="image-button" onClick={handleGoogleSearch} type="button">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
      <button id="mic-button" type="button">
        <i className="fa-regular fa-microphone" />
      </button>
    </div>
  );
};

export default SearchBar;
