import React, { Component } from "react";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container d-flex justify-content-between">
              <div>
                <a className="navbar-brand d-block" href="#">
                  Start Bootstrap TienHung
                </a>
              </div>

              <div className="" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link active" href="#">
                      Home <span className="sr-only"></span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Service
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <body className="container">
          <section
            className="banner bg-light d-flex flex-column align-items-center justify-content-center mt-5 px-5"
            style={{ height: 400 }}
          >
            <h2 className="fs-1">A Warm Welcome!</h2>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              esse saepe, neque ratione voluptatem tempore adipisci
              necessitatibus est deserunt quis ut cumque in officiis iste dolor
              tenetur quisquam ipsam voluptate!
            </p>
            <button className="btn btn-primary fs-4">Call to action!</button>
          </section>
          <section className="item mt-5 mb-5">
            <div className="row d-flex">
              <div className="col-4 mb-5">
                <div>
                  <div className="card text-white bg-light">
                    <img
                      className="card-img-top"
                      src="https://picsum.photos/500/325"
                      alt="Title"
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <h4 className="card-title text-dark fw-bold">
                        Fresh NewLayout
                      </h4>
                      <p className="card-text text-dark text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum, corrupti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <div className="card text-white bg-light">
                    <img
                      className="card-img-top"
                      src="https://picsum.photos/500/325"
                      alt="Title"
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <h4 className="card-title text-dark fw-bold">
                        Free to download
                      </h4>
                      <p className="card-text text-dark text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum, corrupti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <div className="card text-white bg-light">
                    <img
                      className="card-img-top"
                      src="https://picsum.photos/500/325"
                      alt="Title"
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <h4 className="card-title text-dark fw-bold">
                        Jumbotron hero header{" "}
                      </h4>
                      <p className="card-text text-dark text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum, corrupti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <div className="card text-white bg-light">
                    <img
                      className="card-img-top"
                      src="https://picsum.photos/500/325"
                      alt="Title"
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <h4 className="card-title text-dark fw-bold">
                        Feature boxes
                      </h4>
                      <p className="card-text text-dark text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum, corrupti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <div className="card text-white bg-light">
                    <img
                      className="card-img-top"
                      src="https://picsum.photos/500/325"
                      alt="Title"
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <h4 className="card-title text-dark fw-bold">
                        Simple clean code
                      </h4>
                      <p className="card-text text-dark text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum, corrupti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <div className="card text-white bg-light">
                    <img
                      className="card-img-top"
                      src="https://picsum.photos/500/325"
                      alt="Title"
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <h4 className="card-title text-dark fw-bold">
                        A name you trust
                      </h4>
                      <p className="card-text text-dark text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum, corrupti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </body>
        <footer className="footer bg-dark text-white d-flex justify-content-center align-items-center" style={{minHeight: 100}}>
            Copyright Cybersoft Bootcamp30 DinhTienHung Project - published in 2022
        </footer>
      </div>
    );
  }
}
