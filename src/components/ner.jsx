import React, { Component } from "react";
import TextSubmit from "./textSubmit";
import NerResults from "./nerResults";

class Ner extends Component {
  render() {
    return (
      <React.Fragment>
        <TextSubmit
          baseURL="http://127.0.0.1:5000/ner"
          pageTitle="Named Entity Recognition"
          toolDescription="Highlights known entities in a block of text"
          toolComponent={<NerResults />}
        />
      </React.Fragment>
    );
  }
}

export default Ner;
