import React from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Science = () => {
  const {
    state: { newsCategoryLoading, query, filterArray, newsCategories },
  } = useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <CategoryPageComp
      newsCategory={query === "" ? newsCategories.science : filterArray}
    />
  );
};

export default Science;
