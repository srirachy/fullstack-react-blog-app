import React, { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPosts } from '../store/postSlice';

const TempWrapper = styled.div``;

const PostWrapper = styled.div``;

type PostProps = {
  title: String;
  body: String;
  community: String;
  userName: String;
  slugifiedName: String;
};

function ViewCommunity() {
  const { community: cName } = useParams();
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

  console.log(cName);

  useEffect(() => {
    if (cName) console.log(cName);
  });

  return (
    <TempWrapper>
      {Object.values(posts).map((post: PostProps) => {
        console.log(post);
        let cObj;
        if (post) {
          cObj = community.find((comm) => {
            return comm.uniqueName === cName ? comm : '';
          });
        }
        console.log(cObj);
        return post.community === cObj?.displayName ? (
          <Link
            // /c/${community.slugifiedName}/${post.slugifiedName}
            to={`/c/${cObj?.uniqueName}/post/${post.slugifiedName}`}
            key={nanoid()}
          >
            <PostWrapper>
              <h3>{post.title}</h3>
              <p>{post.userName}</p>
            </PostWrapper>
          </Link>
        ) : (
          ''
        );
      })}
    </TempWrapper>
  );
}

export default ViewCommunity;
