import React, { useState } from 'react';

const HeaderMain = ({ onSearch }) => {
  
  
  const [search, setSearch] = useState('');

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (search.trim() !== '') {
      onSearch(search);   
    }
  };

  return (
    <div className="main">
      <header className="header">
        <div className="left-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt="YouTube Logo"
            className="logo"
          />
          <span className="brand-name">YouTube</span>
        </div>

        <div className="center-section">
          <form className="search-bar" onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={search}
              onChange={handleInputChange}
            />
            <button type="submit" className="search-button">
              🔍
            </button>
          </form>
        </div>

        <div className="right-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt="User"
            className="user-icon"
          />
        </div>
      </header>
    </div>
  );
};

export default HeaderMain;
