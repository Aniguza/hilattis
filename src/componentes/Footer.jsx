import React from "react";
import '../assets/css/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Hilattis</h2>
        </div>
        
        <div className="footer-links">
          <a href="">Términos Y Condiciones</a>
          <span className="separator">|</span>
          <a href="">Políticas De Privacidad</a>
        </div>
        
        <div className="footer-social">
          <a href="https://instagram.com" aria-label="Instagram">
            <i className="social-icon instagram"></i>
          </a>
          <a href="https://whatsapp.com" aria-label="WhatsApp">
            <i className="social-icon whatsapp"></i>
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <i className="social-icon facebook"></i>
          </a>
        </div>
        <div className="footer-copyright">
          <p>Copyright©2024 APYtech</p>
        </div>
      </div>
    </footer>
  );
}
