import React from "react";

const EpisodeItem = ({ name, air_date, episode, url }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-sm-4">Name:</div>
        <div className="col-sm-4">{name}</div>
        <a href={url} className="col-sm-4">
          Click To Watch
        </a>
      </div>
      <div className="row">
        <div className="col-sm-4">Episode:</div>
        <div className="col-sm-4">{episode}</div>
      </div>
      <div className="row">
        <div className="col-sm-4">Date Aired:</div>
        <div className="col-sm-4">{air_date}</div>
      </div>
    </li>
  );
};

export default EpisodeItem;
