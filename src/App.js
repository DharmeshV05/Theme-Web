import "./index.css";
import React, { useRef, useState, useEffect } from "react";
import SocialButtons from "./SocialButtons";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Social from "./Social";


function App() {
  const searchInputRef = useRef(null);
  const [theme, setTheme] = useState("light");

  const handleGoogleSearch = () => {
    const query = searchInputRef.current.value;
    if (query) {
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        "_blank"
      );
    }
  };
  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    // Apply the selected theme to the document body
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <title>Theme</title>
      <link
  rel="preconnect"
  href="https://fonts.googleapis.com"
  crossOrigin="anonymous" // Or your desired CORS policy
/>
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossOrigin="anonymous" // Or your desired CORS policy
/>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
    
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      

      <div id="main-wrapper" className="fancy-scrollbar">
        <div id="main">
          <div id="content">
            <div
              id="links-container"
              style={{ paddingLeft: "30%", paddingRight: "30%" }}
            >
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gmail
              </a>
              <a href="." target="_blank " rel="noopener noreferrer">
                Upcomming
              </a>
              <a
                href="https://react-eshop-lovat.vercel.app/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My site
              </a>
              <a
                href="https://shopping-web-18v9.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
              <a href="." rel="noopener noreferrer">
                Sign up
              </a>
              <a href="." rel="noopener noreferrer">
                Login
              </a>
              {/* header.js */}

              <Header theme={theme} handleThemeToggle={handleThemeToggle} />
              
            </div>
            <div id="header"></div>
          </div>
          <div
            className="mycontainer"
            style={{
              paddingLeft: "30%",
              paddingRight: "30%",
              paddingTop: "1%"
            }}
          >
            <div id="header-container">
              <div className="parent">
                <div className="child">
                  <main>
<p>"The only way to do great work is to love what you do."</p>
<h1> - Steve Jobs </h1>

                  </main>
                  
                </div>
                {/* Include the SocialButtons component here */}
                <div className="child">

                {/* Social buttons  */}

                  <SocialButtons />
                </div>
              </div>
            </div>

            {/* google search */}

            <SearchBar handleGoogleSearch={handleGoogleSearch} />

            {/* Socila links */}
            <Social />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;