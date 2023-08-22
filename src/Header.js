import React from 'react';

const Header = ({ theme, handleThemeToggle }) => {
  return (
    <div id="header-container">
      <div className="theme-toggle-container">
        {/* Add any additional elements you want here */}
      </div>
      <div id="theme-toggle">
        <button onClick={handleThemeToggle}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </div>
  );
};

export default Header;
