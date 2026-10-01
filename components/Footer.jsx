"use client";

import { useState } from "react";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  function toggleSection(section) {
    setOpenSection((current) =>
      current === section ? null : section
    );
  }

  return (
    <footer className="footer">

      {/* =====================================
          TOP FOOTER
          ===================================== */}

      <div className="footer-top">

        {/* NEWSLETTER */}

        <div className="footer-newsletter">
          <h2>BE THE FIRST TO KNOW</h2>

          <p>
            Sign up for updates from mettā muse.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your e-mail..."
              aria-label="Email address"
            />

            <button type="submit">
              SUBSCRIBE
            </button>
          </form>
        </div>


        {/* CONTACT + CURRENCY */}

        <div className="footer-contact">
          <div className="contact-section">
            <h2>CONTACT US</h2>

            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>

          <div className="currency-section">
            <h2>CURRENCY</h2>

            <div className="currency">
              <span className="currency-flag">🇺🇸</span>
              <span>•</span>
              <strong>USD</strong>
            </div>

            <p className="currency-note">
              Transactions will be completed in Euros
              and a currency reference is available on hover.
            </p>
          </div>
        </div>

      </div>


      {/* =====================================
          BOTTOM FOOTER - DESKTOP
          ===================================== */}

      <div className="footer-bottom desktop-footer">

        {/* METTA MUSE */}

        <div className="footer-column">
          <h2>mettā muse</h2>

          <a href="#">About Us</a>
          <a href="#">Stories</a>
          <a href="#">Artisans</a>
          <a href="#">Boutiques</a>
          <a href="#">Contact Us</a>
          <a href="#">EU Compliances Docs</a>
        </div>


        {/* QUICK LINKS */}

        <div className="footer-column">
          <h2>QUICK LINKS</h2>

          <a href="#">Orders & Shipping</a>
          <a href="#">Join/Login as a Seller</a>
          <a href="#">Payment & Pricing</a>
          <a href="#">Return & Refunds</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>


        {/* FOLLOW US */}

        <div className="footer-column footer-social">
          <h2>FOLLOW US</h2>

          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>
          </div>

          <h2 className="payment-heading">
            mettā muse ACCEPTS
          </h2>

          <div className="payment-methods">
            <span>GPay</span>
            <span>MC</span>
            <span>PayPal</span>
            <span>AMEX</span>
            <span>ApplePay</span>
            <span>Pay</span>
          </div>
        </div>

      </div>


      {/* =====================================
          MOBILE FOOTER ACCORDIONS
          ===================================== */}

      <div className="mobile-footer">

        {/* METTA MUSE */}

        <div className="mobile-footer-section">

          <button
            type="button"
            className="mobile-footer-heading"
            onClick={() => toggleSection("metta")}
            aria-expanded={openSection === "metta"}
          >
            <span>mettā muse</span>
            <span>
              {openSection === "metta" ? "⌃" : "⌄"}
            </span>
          </button>

          {openSection === "metta" && (
            <div className="mobile-footer-links">
              <a href="#">About Us</a>
              <a href="#">Stories</a>
              <a href="#">Artisans</a>
              <a href="#">Boutiques</a>
              <a href="#">Contact Us</a>
              <a href="#">EU Compliances Docs</a>
            </div>
          )}

        </div>


        {/* QUICK LINKS */}

        <div className="mobile-footer-section">

          <button
            type="button"
            className="mobile-footer-heading"
            onClick={() => toggleSection("quick")}
            aria-expanded={openSection === "quick"}
          >
            <span>QUICK LINKS</span>
            <span>
              {openSection === "quick" ? "⌃" : "⌄"}
            </span>
          </button>

          {openSection === "quick" && (
            <div className="mobile-footer-links">
              <a href="#">Orders & Shipping</a>
              <a href="#">Join/Login as a Seller</a>
              <a href="#">Payment & Pricing</a>
              <a href="#">Return & Refunds</a>
              <a href="#">FAQs</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          )}

        </div>


        {/* FOLLOW US */}

        <div className="mobile-footer-section">

          <button
            type="button"
            className="mobile-footer-heading"
            onClick={() => toggleSection("follow")}
            aria-expanded={openSection === "follow"}
          >
            <span>FOLLOW US</span>
            <span>
              {openSection === "follow" ? "⌃" : "⌄"}
            </span>
          </button>

          {openSection === "follow" && (
            <div className="mobile-social-icons">
              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="LinkedIn">
                in
              </a>
            </div>
          )}

        </div>


        {/* PAYMENT */}

        <div className="mobile-payment">
          <h2>mettā muse ACCEPTS</h2>

          <div className="payment-methods">
            <span>GPay</span>
            <span>MC</span>
            <span>PayPal</span>
            <span>AMEX</span>
            <span>ApplePay</span>
            <span>Pay</span>
          </div>
        </div>

      </div>


      {/* =====================================
          COPYRIGHT
          ===================================== */}

      <p className="footer-copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>

    </footer>
  );
}