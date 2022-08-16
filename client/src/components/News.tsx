import axios from 'axios';
import { useEffect, useState } from 'react';

type NewsType = {
  title: String;
  url: String;
  urlToImage: String;
  author: String;
};

function News() {
  const [news, setNews] = useState([]);
  const api_key = 'a3622bbc05ba48cf903c4587e734e7f1';

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`,
      );
      setNews(data.articles);
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
        {news.map((news: NewsType, index) => {
          if (index < 5) {
            return (
              <div
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
                  src={String(news.urlToImage)}
                  alt="tes"
                  style={{ width: '100%', objectFit: 'contain' }}
                />
                <div
                  style={{
                    padding: 10,
                  }}
                >
                  <h4>{news.author}</h4>
                  <p>{news.title}</p>

                  {/* <button type="button">Delete</button> */}
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default News;
