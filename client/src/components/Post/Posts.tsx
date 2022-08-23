import React, { Key, useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPosts } from '../../store/postSlice';
import funcs from '../../utils/Functions';

const TempWrapper = styled.div``;

const PostWrapper = styled.div``;

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
          <Link
            // /c/${community.slugifiedName}/${post.slugifiedName}
            to={`/c/${cObj?.uniqueName}/post/${post._id}`}
            key={post._id}
          >
            <PostWrapper>
              <h3>{post.title}</h3>
              <h4>{post.userName}</h4>

              <p>{curText}</p>
            </PostWrapper>
          </Link>
        );
      })}
    </TempWrapper>
  );
}

export default Posts;
