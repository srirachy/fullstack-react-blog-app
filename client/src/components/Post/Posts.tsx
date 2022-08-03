import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TempWrapper = styled.div``;

const PostWrapper = styled.div``;

type PostsProps = {
  posts: Post[];
};

type Post = {
  id: number | string;
  title: string;
  author: string;
};

function Posts({ posts }: PostsProps) {
  console.log(posts);

  return (
    <TempWrapper>
      {Object.values(posts).map((post: Post) => {
        console.log(post);
        return (
          <Link to={`/post/${post.id}`}>
            <PostWrapper>
              <li key={post.id}>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.author}</p>
                </div>
              </li>
            </PostWrapper>
          </Link>
        );
      })}
    </TempWrapper>
  );
}

export default Posts;
