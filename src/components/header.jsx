import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-auto">
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
                style={{ fill: "green" }}
              >
                <use href="#bootstrap" />
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className="nav-link text-secondary">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <use href="#home" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/extractNounsVerbs" className="nav-link text-white">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <use href="#speedometer2" />
                  </svg>
                  Extract Nouns and Verbs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
