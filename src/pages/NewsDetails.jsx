import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();

  const { id } = useParams();
  const [news, setNews] = useState({});

  //   console.log(id);
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
  //   console.log(data, news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="my-10 w-11/12 mx-auto grid grid-cols-12 gap-6">
        <section className="col-span-9">
          {/* <h2 className="text-3xl font-bold mb-4">News Details Page</h2>
          <p>
            This is the news details page. Here you can find detailed
            information about a specific news article.
          </p> */}
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
