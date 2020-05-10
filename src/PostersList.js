import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import PosterItem from "./PosterItem";
import "./App.css";
import style from "./PostersList.module.css";

function PostersList({ match, history }) {
  const query = match.params.searchQuery;

  const setQuery = newQuery => {
    // set url BY USING the react-router history api
    history.push(`/posters-list/${newQuery}`);
  };

  const [posterSearchResult, setPosterSearchResult] = useState(null);

  useEffect(() => {
    const queryEncoded = encodeURIComponent(query);
    const fetchPosters = async () => {
      const response = await fetch(
        `https://staging-ng.morressier.com/events_manager/v3/posters/search?query=${queryEncoded}`
      );
      const data = await response.json();
      console.log("data", data);
      setPosterSearchResult(data.posters);
    };
    //check if the query is empty
    if (query !== undefined && query.length > 0) {
      fetchPosters();
    }
  }, [query]);

  return (
    <div>
      <Nav query={query} setQuery={setQuery} />
      <div className={style.PostersList}>
        {/* if postersData evaluates to false, don't run the following */}
        {posterSearchResult &&
          posterSearchResult.map(poster => (
            <PosterItem
              key={poster.id}
              searchQuery={query}
              posterData={poster}
            />
          ))}
      </div>
    </div>
  );
}

export default PostersList;
