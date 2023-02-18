import React, { useEffect, useRef } from "react";
import { SingleArticle, Loading, ScrollWidget } from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { urlCategory, api5 } from "../helpers/urls";
import { categoriesArray } from "../helpers/categories";

const HomePage = () => {
  const {
    fetchByCategory,
    newsCategoryLoading,
    newsArray,
    sortLatestNews,
    getNewsArray,
    clearOldNews,
    query,
    newsGeneral,
    newsScience,
    newsSport,
    newsBusiness,
    newsTech,
  } = useNewsCategoryContext();

  useEffect(() => {
    categoriesArray.forEach((cat) => {
      return fetchByCategory(urlCategory, cat, api5);
    });
  }, []);

  useEffect(() => {
    getNewsArray();
  }, [
    newsSport,
    newsScience,
    newsGeneral,
    newsScience,
    newsBusiness,
    newsTech,
  ]);

  useEffect(() => {
    sortLatestNews();
  }, [
    newsSport,
    newsScience,
    newsGeneral,
    newsScience,
    newsBusiness,
    newsTech,
  ]);

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <div className="news-page">
      <h1 className="title">News</h1>
      <div className="articles-container">
        <ScrollWidget />
        {newsArray.slice(0, 16).map((article) => {
          return <SingleArticle key={Math.random() * 10000} {...article} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;