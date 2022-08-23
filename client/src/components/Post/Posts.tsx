import React, { Key, useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPosts } from '../../store/postSlice';
import funcs from '../../utils/Functions';

const TempWrapper = styled.div`
  max-width: 100vw;
  heigth: 100vh;
  a {
    text-decoration: none;
  }
`;
const PostWrapper = styled.div`
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  width: 60%;
  height: auto;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  text-align: left;
`;
const Thoughts = styled.div`
  color: white;
  justify-content: center;
  h3 {
    text-decoration: none;
  }
`;

type PostProps = {
  _id: Key | null | undefined;
  title: string;
  body: string;
  community: string;
  userName: string;
  slugifiedName: string;
};

function Posts() {
  const dispatch = useAppDispatch();
  const { posts, reload } = useAppSelector(
    (state: RootState) => state.posts,
    shallowEqual,
  );

  const { community } = useAppSelector(
    (state: RootState) => state.community,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, reload]);

  return (
    <TempWrapper>
      {Object.values(posts).map((post: any | PostProps) => {
        let cObj;
        if (post) {
          cObj = community.find((comm) => {
            return comm.displayName === post.community ? comm : '';
          });
        }
        const curText = funcs.convertText(post.body);
        return (
          <PostWrapper>
            <Link
              // /c/${community.slugifiedName}/${post.slugifiedName}
              to={`/c/${cObj?.uniqueName}/post/${post._id}`}
              key={post._id}
            >
              <Thoughts>
                <h3>{post.userName}</h3>
                <h4>{post.title}</h4>
                <p>{curText}</p>
              </Thoughts>
            </Link>
          </PostWrapper>
        );
      })}
    </TempWrapper>
  );
}

export default Posts;
