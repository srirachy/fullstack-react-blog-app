import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';

type NewsType = {
  title: string;
  url: string;
  urlToImage: string;
  author: string;
};

function News() {
  const [news, setNews] = useState([]);
  const apiKey = 'a3622bbc05ba48cf903c4587e734e7f1'; // move this to env later

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      );
      setNews(data.articles);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1> News</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {news.map((newsItem: NewsType, index) => {
          if (index < 5) {
            return (
              <div
                key={nanoid()}
                style={{
                  width: 250,
                  height: 350,
                  marginRight: 20,
                  background: 'white',
                  boxShadow: '3px 0px 23px 1px rgba(0,0,0,0.35)',
                  borderRadius: 20,
                }}
              >
                <img
                  src={String(newsItem.urlToImage)}
                  alt="tes"
                  style={{ width: '100%', objectFit: 'contain' }}
                />
                <div
                  style={{
                    padding: 10,
                  }}
                >
                  <h4>{newsItem.author}</h4>
                  <p>{newsItem.title}</p>
                </div>
              </div>
            );
          }
          return '';
        })}
      </div>
    </>
  );
}

export default News;
