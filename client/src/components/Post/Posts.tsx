import React, { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPosts } from '../../store/postSlice';

const TempWrapper = styled.div``;

const PostWrapper = styled.div``;

type PostProps = {
  title: String;
  body: String;
  community: String;
  userName: String;
  slugifiedName: String;
};

function Posts() {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector(
    (state: RootState) => state.posts,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <TempWrapper>
      {Object.values(posts).map((post: PostProps) => {
        console.log(post);
        return (
          <Link
            // /c/${community.slugifiedName}/${post.slugifiedName}
            to={`/c/${post.community}/${post.slugifiedName}`}
            key={nanoid()}
          >
            <PostWrapper>
              <h3>{post.title}</h3>
              <p>{post.userName}</p>
            </PostWrapper>
          </Link>
        );
      })}
    </TempWrapper>
  );
}

export default Posts;
