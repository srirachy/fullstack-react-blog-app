// import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import Category from '../components/Category/Category';
import Posts from '../components/Post/Posts';
import { getData } from '../utils/API';

type PostData = {
  id: number;
  author: string;
  title: string;
};

const initPosts: PostData[] = [];

function Main() {
  const [posts, setPosts] = useState<PostData[]>(initPosts);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData('posts/');
      setPosts(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (posts) {
      console.log(Object.values(posts).map((post) => post.id));
      const match = Object.values(posts).find(
        (post) => post.id === 1,
      );
      console.log(match, 'meow');
    }
  }, [posts]);
  return (
    <>
      <Posts posts={posts} />
      <Category />
      <div>meow</div>
    </>
  );
}

export default Main;
