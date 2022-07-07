import React from "react";

const Home = () => {
  return (
    <div className="cover-container d-flex w-50 h-100 p-3 mx-auto flex-column">
      <main className="px-3">
        <h1>Machine Learning Demos</h1>
        <p className="lead">
          Explore demonstration apps built using ReactJS, Flask and Bootstrap.
        </p>
        <p className="lead">
          <a
            href="#"
            className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark"
          >
            Get started
          </a>
        </p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>
          Website built for{" "}
          <a href="https://dunedin.kiwi/" className="text-white">
            Dunedin Analytics
          </a>
          , by{" "}
          <a href="https://github.com/apemann" className="text-white">
            Donovan Nightingale
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Home;
