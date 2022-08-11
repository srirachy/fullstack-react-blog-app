import React, { Key, useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPosts } from '../../store/postSlice';

const TempWrapper = styled.div``;

const PostWrapper = styled.div``;

type PostProps = {
  _id: Key | null | undefined;
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

  const { community } = useAppSelector(
    (state: RootState) => state.community,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <TempWrapper>
      {Object.values(posts).map((post: PostProps) => {
        console.log(post);
        let cObj;
        if (post) {
          cObj = community.find((comm) => {
            return comm.displayName === post.community ? comm : '';
          });
        }
        return (
          <Link
            // /c/${community.slugifiedName}/${post.slugifiedName}
            to={`/c/${cObj?.uniqueName}/post/${post._id}`}
            key={post._id}
          >
            <PostWrapper>
              <h3>{post.title}</h3>
              <p>{post.userName}</p>
              <p>{post.body}</p>
            </PostWrapper>
          </Link>
        );
      })}
    </TempWrapper>
  );
}

export default Posts;
