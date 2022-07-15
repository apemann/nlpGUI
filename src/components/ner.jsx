import React, { Component } from "react";
import axios from "axios";
import NerResults from "./nerResults";

class Ner extends Component {
  eg = [
    {
      end_char: 121,
      label: "NORP",
      label_code: 381,
      start_char: 115,
      text: "Indian",
    },
    {
      end_char: 136,
      label: "GPE",
      label_code: 384,
      start_char: 131,
      text: "Delhi",
    },
  ];

  state = { postId: null, textAreaVal: "", responseData: null };

  handleSubmit = () => {
    const baseURL = "http://127.0.0.1:5000/ner";

    axios
      .post(baseURL, {
        title: "Text submission",
        body: this.state.textAreaVal,
      })
      .then((response) => {
        this.setState({
          postId: response.data.id,
          responseData: response.data,
        });
      });
  };

  handleError = () => {
    console.log("Text area empty!");
  };

  handleClearText = () => {
    this.setState({ textAreaVal: "", responseData: null });
  };

  render() {
    return (
      <div className="bg-dark text-secondary px-4 py-5 text-center m-2">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">
            Named Entity Recognition
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Highlights known entities in a block of text
            </p>
            <textarea
              className="rounded"
              ref="queryText"
              value={this.state.textAreaVal}
              onChange={(e) => {
                this.setState({ textAreaVal: e.target.value });
              }}
              cols="60"
              rows="10"
            ></textarea>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                onClick={
                  this.state.textAreaVal !== ""
                    ? () => this.handleSubmit()
                    : () => this.handleError()
                }
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4"
                onClick={() => this.handleClearText()}
              >
                Clear Text
              </button>
            </div>
            {this.state.responseData != null && (
              <NerResults results={this.state.responseData} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Ner;
