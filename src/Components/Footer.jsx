import React from "react";
import { useGlobalContext } from "./utils/global.context";

const Footer = () => {
  const { state } = useGlobalContext();
  
  return (
    <footer className={state.theme ? "" : "dark"}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="/images/ico-facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="/images/ico-instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="/images/ico-whatsapp.png" alt="WhatsApp" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="/images/ico-tiktok.png" alt="TikTok" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
