import React, { useState, useEffect } from "react";
import style from "./PosterDetails.module.css";
import Nav from "./Nav";

import "./App.css";

function PosterDetails({ match, history }) {
  // console.log("match", match);
  const query = match.params.searchQuery;

  const setQuery = newQuery => {
    history.push(`/posters-list/${newQuery}`);
  };

  const [poster, setPoster] = useState({});

  const fetchDetails = async () => {
    const response = await fetch(
      `https://staging-ng.morressier.com/events_manager/v2/posters/${
        match.params.id
      }`
    );
    const posterDetailsData = await response.json();
    // console.log("--------posterDetailsData", posterDetailsData);
    setPoster(posterDetailsData.poster);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <Nav query={query} setQuery={setQuery} />
      <div className={style.posterDetails}>
        <h1>{poster.title}</h1>
        <div className={style.keywordsBox}>
          {poster.keywords &&
            poster.keywords.map(keyword => (
              <div className={style.singleKeyword}>{keyword}</div>
            ))}
        </div>
        <div className={style.abstract}>{poster.paper_abstract}</div>
        <p>Uploaded at: {new Date(poster.uploaded_at).toString()}</p>
        {poster.thumb_url_medium && (
          <img src={poster.thumb_url_medium} alt="poster preview" />
        )}{" "}
      </div>
    </div>
  );
}

export default PosterDetails;
