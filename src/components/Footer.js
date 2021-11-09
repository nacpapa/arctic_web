import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join us</p>
        <p className="footer-subscription-text">You can do whatever you want</p>

        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Suscribite</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Abount Us</h2>
            <Link to="/">YouTube</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
