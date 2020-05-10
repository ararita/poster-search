import React from "react";
import { Link } from "react-router-dom";
import style from "./PosterItem.module.css";

function PosterItem(props) {
  const posterData = props.posterData;
  const currentSearchQuery = props.searchQuery;
  console.log("posterData", posterData);

  return (
    <div>
      <div className={style.PosterItem}>
        <div className={style.mainContent}>
          {posterData.thumb_url && (
            <figure className={style.image}>
              <img src={posterData.thumb_url} alt="poster preview" />
            </figure>
          )}
          <div>
            <Link
              to={`/posters-list/${currentSearchQuery}/poster-details/${
                posterData.id
              }`}
              style={{ textDecoration: "none" }}
            >
              <h3 className={style.title}>{posterData.title.toUpperCase()}</h3>
            </Link>
            <div className={style.authorsBox}>
              {posterData.author_names.map(author => (
                <div key={posterData.authors} className={style.singleAuthor}>
                  {author}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.keywordsBox}>
          {posterData.keywords &&
            posterData.keywords.map(keyword => (
              <div className={style.singleKeyword}>{keyword}</div>
            ))}
        </div>

        {posterData.events && <p>Event: {posterData.events}</p>}
      </div>
    </div>
  );
}

export default PosterItem;
