import React from "react";

export default function Navbar() {
  return (
    <div className="main-banner">
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <a
            className="navbar-brand justify-content-center align-items-center"
            href="#"
          >
            <img src={require("../Components/assets/Navbar/logo.png")} alt="logo" />
          </a>
          <button
            className="navbar-toggler "
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dealers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Yezdi cares
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a
            className="jawa"
            target="_blank"
            href="https://www.jawamotorcycles.com/"
          >
            <img src={require("../Components/assets/Navbar/jawa.png")} alt="logo" />
          </a>
        </nav>
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dealers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Yezdi cares
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item mt-2">
                <a href="#">
                  <button className="custom-btn btn-2">BOOK NOW</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
