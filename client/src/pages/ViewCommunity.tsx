import { useEffect } from 'react';
import styled from 'styled-components';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPosts } from '../store/postSlice';
import CommunityPosts from '../components/Post/CommunityPosts';
import { RootState } from '../store';
import img from '../img/Space.jpg';

const TempWrapper = styled.div`
  background-image: url(${img});
  max-width: 100vw;
  height: 100vh;
  margin-top: -20px;
  a {
    text-decoration: none;
  }
`;

function ViewCommunity() {
  const dispatch = useAppDispatch();

  const { reload } = useAppSelector(
    (state: RootState) => state.posts,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, reload]);

  return (
    <TempWrapper>
      <CommunityPosts />
    </TempWrapper>
  );
}

export default ViewCommunity;
