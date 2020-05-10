import React, { useState } from "react";
import style from "./Nav.module.css";

function Nav(props) {
  const [search, setSearch] = useState("");
  const setQuery = props.setQuery;

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <nav>
      <form onSubmit={getSearch} className={style.form}>
        <input
          className={style.searchBar}
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className={style.searchButton} type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default Nav;
