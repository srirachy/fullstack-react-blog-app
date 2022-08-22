import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import styles from 'styled-components';
import { getNews } from '../../services/API';

const NewsWrapper = styles.div`
  overflow: hidden;
  max-width: 60%;
  height: 20%;
  margin: 0 auto;
  padding: 0;
`;
const CardWrapper = styles.div`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  flex-direction: row;
  padding: 0;
  a {
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    text-decoration: none;
  }
`;

const LinkWrapper = styles.div`
  display: flex;
  width: 100px;
  height: 80px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 5px;
  padding: 0;
  p {
    font-size: 0.4rem;
    color: #ffffff;
    text-align: center;
  }
`;

const NewsItemWrapper = styles.div`
  display: flex;
  align-self: flex-end;
`;

type NewsType = {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
};

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await getNews();
      setNews(data.articles);
      console.log(data);
    };
    getData();
  }, []);

  function convertText(curString: string) {
    if (curString.length > 65) {
      return `${curString.substring(0, 65)}...`;
    }
    return curString;
  }

  return (
    <NewsWrapper>
      <h5>News Today</h5>
      <CardWrapper>
        {news.map((newsItem: NewsType, index) => {
          if (index < 5) {
            console.log(newsItem);
            const newsText = convertText(newsItem.title);

            return (
              <a
                href={newsItem.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkWrapper
                  key={nanoid()}
                  style={{
                    backgroundImage: `url('${newsItem.urlToImage}')`,
                  }}
                >
                  <NewsItemWrapper>
                    {/* <img src={newsItem.urlToImage} alt="tes" /> */}
                    <p>{newsText}</p>
                  </NewsItemWrapper>
                </LinkWrapper>
              </a>
            );
          }
          return '';
        })}
      </CardWrapper>
    </NewsWrapper>
  );
}

export default News;
