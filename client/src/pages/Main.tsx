import React, { useEffect, useState } from 'react';
import Posts from '../components/Posts';

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
      const res = await fetch('http://localhost:3000/posts/');
      const json = await res.json();
      setPosts(json);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (posts) {
      console.log(posts.map((post) => post.id));
      const match = posts.find((post) => post.id === 1);
      console.log(match, 'meow');
    }
  }, [posts]);
  return (
    <>
      <Posts posts={posts} />
      <div>meow</div>
    </>
  );
}

export default Main;
