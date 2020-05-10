import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import style from "./Welcome.module.css";

function Welcome() {
  const [query, setQuery] = useState("");

  return (
    <div className={style.welcome}>
      <h1 className={style.headline}>Welcome to Morressier</h1>
      <p className={style.text}>You can search for the posters below</p>
      <form className={style.searchForm}>
        <input
          className={style.searchBar}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <Link to={`/posters-list/${query}`}>
          <button type="submit" className={style.searchButton}>
            Search
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Welcome;
