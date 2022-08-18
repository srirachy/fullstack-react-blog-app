import { useEffect } from 'react';
import styled from 'styled-components';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPosts } from '../store/postSlice';
import CommunityPosts from '../components/Post/CommunityPosts';
import { RootState } from '../store';

const TempWrapper = styled.div``;

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
