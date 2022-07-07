import React, { Component } from "react";

class ListResults extends Component {
  render() {
    const { results } = this.props;
    const categories = Object.keys(results);

    return (
      <div className="row justify-content-around">
        {categories.map((category) => (
          <div
            key={category}
            className="col p-2 m-4 rounded bg-secondary text-light"
          >
            <p>{this.formatTitle(category)}</p>
            <ul className="list-group">
              {results[category].map((result, index) => (
                <li key={index} className="list-group-item">
                  {result}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  formatTitle = (title) => {
    title = title[0].toUpperCase() + title.slice(1);
    return title.replace("_", " ");
  };
}

export default ListResults;
