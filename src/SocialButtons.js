// SocialButtons.js
import React from 'react';


function SocialButtons() {
  return (
    <div className="social-buttons">
      <a
        href="https://www.instagram.com/dharmesh.13/"
        className="social-button social-button--instagram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram" />
      </a>
      <a
        href="https://www.youtube.com/"
        className="social-button social-button--youtube"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <i className="fab fa-youtube" />
      </a>
      <a
        href="https://www.facebook.com/"
        className="social-button social-button--facebook"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook-f" />
      </a>
      <a
        href="https://www.linkedin.com/in/dharmesh-vishwakarma-937aa723b/"
        className="social-button social-button--linkedin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      <a
        href="https://github.com/"
        className="social-button social-button--github"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <i className="fab fa-github" />
      </a>
      <a
        href="https://codepen.io/your-work"
        className="social-button social-button--codepen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="CodePen"
      >
        <i className="fab fa-codepen" />
      </a>
    </div>
  );
}

export default SocialButtons;
