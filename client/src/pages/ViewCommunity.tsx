import React, { Key, useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPosts } from '../store/postSlice';

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
    // use reload != reload with thunk
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
            to={`/c/${cObj?.uniqueName}/post/${post._id}`}
            key={post._id}
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
