// import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import Community from '../components/Community/Community';
import Posts from '../components/Post/Posts';
import API from '../utils/API';

type PostData = {
  id: number | string;
  author: string;
  title: string;
  _id: number | string;
};

const initPosts: PostData[] = [];

function Main() {
  const [posts, setPosts] = useState<PostData[]>(initPosts);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.getData('api/posts/');
      setPosts(res.data);
      console.log(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (posts) {
      console.log(posts);
    }
  }, [posts]);
  return (
    <>
      <Posts posts={posts} />
      <Community />
      <div>meow</div>
    </>
  );
}

export default Main;
