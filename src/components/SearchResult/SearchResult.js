import React from "react";
import "./SearchResult.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const SearchResult = (props) => {
  return (
    <div className="searchResult">
      <img src={props.img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{props.location}</p>
          <p>{props.title}</p>
          <p>___</p>
          <p>{props.description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{props.star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2>{props.price}</h2>
            <p>{props.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
