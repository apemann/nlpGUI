import React, { Component } from "react";
import TextSubmit from "./textSubmit";
import ListResults from "./listResults";

class ExtractNounsVerbs extends Component {
  render() {
    return (
      <React.Fragment>
        <TextSubmit
          baseURL="http://127.0.0.1:5000/extractNounsVerbs"
          pageTitle="Extract Nouns and Verbs"
          toolDescription="Quickly retrieve lists of verbs and nouns from a block of text by
              pasting it in the box below."
          toolComponent={<ListResults />}
        />
      </React.Fragment>
    );
  }
}

export default ExtractNounsVerbs;
