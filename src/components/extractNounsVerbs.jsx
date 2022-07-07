import React, { Component } from "react";
import axios from "axios";
import ListResults from "./listResults";

class ExtractNounsVerbs extends Component {
  eg = {
    noun_phrases: [
      "Mesoamerica",
      "a historical region",
      "cultural area",
      "southern North America",
    ],
    verbs: ["extend", "flourish"],
  };

  state = { postId: null, textAreaVal: "", responseData: null };

  handleSubmit = () => {
    const baseURL = "http://127.0.0.1:5000/extractNounsVerbs";

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
            Extract Nouns and Verbs
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Quickly retrieve lists of verbs and nouns from a block of text by
              pasting it in the box below.
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
              <ListResults results={this.state.responseData} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ExtractNounsVerbs;
