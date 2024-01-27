import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className="my-3 ">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            src={imgUrl ? imgUrl : "https://i.imgur.com/pnWiGV5.jpg"}
            className="card-img-top "
            alt="..."
          />
          <div className="card-body d-flex flex-column">
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger ">
              <span class="">{source}</span>
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark mt-auto"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
