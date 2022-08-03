import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Category from '../components/Category/Category';
import Posts from '../components/Post/Posts';
import Tooltip from '../utils/Tooltip';

type PostData = {
  id: number;
  author: string;
  title: string;
};

const initPosts: PostData[] = [];

function Main() {
  const [posts, setPosts] = useState<PostData[]>(initPosts);
  const [showTooltip, setShowTooltip] = useState(true);

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
      {/* temp spot for adding post */}
      <Link to="/submit">
        {showTooltip && (
          <Tooltip
            text="add post"
            id="meowTip"
            effect="solid"
            place="bottom"
          />
        )}
        <button
          data-tip
          data-for="meowTip"
          type="button"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => {
            setShowTooltip(false);
            setTimeout(() => setShowTooltip(true), 50);
          }}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </Link>
      {/* end temp spot for add post */}
      <Category />
      <div>meow</div>
    </>
  );
}

export default Main;
