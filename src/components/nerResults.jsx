import React, { Component } from "react";

class NerResults extends Component {
  hightlightEntities = (baseText, entities) => {
    if (entities.length === 0) {
      return baseText;
    }

    let output = [];
    let last_idx = 0;

    entities.forEach((entity) => {
      output.push(baseText.substring(last_idx, entity.start_char));
      output.push(
        <b
          data-testid={entity.start_char}
          className={[
            entity.label,
            "ner-entity",
            "border",
            "border-3",
            "rounded",
            "p-1",
            "text-dark",
          ].join(" ")}
        >
          {baseText.substring(entity.start_char, entity.end_char)}
          <i className="m-2 fs-6">({entity.label})</i>
        </b>
      );

      last_idx = entity.end_char;
    });

    output.push(baseText.substring(last_idx, baseText.length));

    return output;
  };

  render() {
    const { text, results } = this.props;

    let highlightedText = this.hightlightEntities(text, results);
    console.log(highlightedText);

    return (
      <div className="row justify-content-around p-4">
        <div className="lh-lg" aria-label="ner-output">
          {highlightedText}
        </div>
      </div>
    );
  }
}

export default NerResults;
