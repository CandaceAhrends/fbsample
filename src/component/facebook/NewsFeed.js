import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageCard from "./components/ImageCard";
import HeadLine from "./components/Headline";
import { newsPromise, newsFeedData } from "../../api/fetchNewsFeed";
import InfiniteScroll from "react-infinite-scroll-component";
import { from } from "rxjs";

import "./newsfeed.scss";

const NewsFeed = () => {
  const [newsFeed, setNewsFeed] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);

  React.useEffect(() => {
    const news$ = from(newsPromise).subscribe((news) => {
      setNewsFeed(news);
    });
    return () => news$ && news$.unsubscribe();
  }, []);
  const fetchMoreNews = () => {
    setTimeout(() => {
      setNewsFeed([...newsFeed, ...newsFeedData()]);
      setHasMore(false);
    }, 1000);
  };
  return (
    <main>
      <Header></Header>
      <InfiniteScroll
        dataLength={newsFeed.length}
        next={fetchMoreNews}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className="news-feed">
          {newsFeed.length ? (
            newsFeed.map((newsItem) => (
              <ImageCard key={newsItem.id}>
                <HeadLine data={newsItem}></HeadLine>
              </ImageCard>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </InfiniteScroll>
      <Footer></Footer>
    </main>
  );
};

export default NewsFeed;
