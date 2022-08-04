import React, { Component } from "react";

export default class CardVip extends Component {
  render() {
    let { cc1, cc2, para } = this.props;
    return (
      <div>
        <div className="card text-white bg-dark text-white">
          <img
            className="card-img-top"
            src="https://picsum.photos/200/200"
            alt="Title"
          />
          <div className="card-body text-white">
            <h4 className="card-title">{cc1}</h4>
            <p className="card-text">{cc2}</p>
            <p className="fs-3">{para}</p>
          </div>
        </div>
      </div>
    );
  }
}
