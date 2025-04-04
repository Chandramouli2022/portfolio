import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
  const { date, title, role, description, link } = props;

  return (
    <React.Fragment>
      <div className='homepage-article'>
        <div className='homepage-article-content'>
          <div className='homepage-article-date'>|&nbsp;&nbsp;&nbsp;{date}</div>
          <div className='homepage-article-title'>{title}</div>
          <div className='homepage-article-role'>{role}</div>
          <div className='homepage-article-description'>{description.slice(0,200)+"..."}</div>
          <div className='homepage-article-link'>
            <Link to={"/articles"}>
              Read more{" "}
              <FontAwesomeIcon
                style={{ fontSize: "10px" }}
                icon={faChevronRight}
              />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Article;
