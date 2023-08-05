import React from "react";

const Newsitem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } =
    props;
  return (
    <div className="card my-3 text-justify">
      <img
        src={
          imgUrl
            ? imgUrl
            : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>
          <span className="badge bg-danger text-white">
            <em>{source}</em>
          </span>
        </p>
        <a
          rel="noreferrer"
          href={newsUrl}
          target="_blank"
          className="btn btn-dark"
        >
          Read more
        </a>
      </div>
      <div className="card-footer text-bold">
        {author ? author : "Unknown"} <br />
        {new Date(date).toGMTString()}
      </div>
    </div>
  );
};

export default Newsitem;
