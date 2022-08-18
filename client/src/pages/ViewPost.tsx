import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { shallowEqual } from 'react-redux';
import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPostById } from '../store/postSlice';
import DeletePost from '../components/Post/DeletePost';
import EditPost from '../components/Post/EditPost';
import EditPostModal from '../components/Modal/EditPostModal';

const PageWrapper = styled.div``;
const PostWrapper = styled.div``;

function ViewPost() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { post, editor } = useAppSelector(
    (state: RootState) => state.posts,
    shallowEqual,
  );

  useEffect(() => {
    if (id) {
      dispatch(getPostById(id));
    }
  }, [dispatch, id]);

  return (
    <PageWrapper>
      {editor && <EditPostModal post={post} />}
      {post.title && (
        <PostWrapper>
          <p>{post?.title}</p>
          <p>{post?.body}</p>
        </PostWrapper>
      )}
      <EditPost />
      <DeletePost />
    </PageWrapper>
  );
}

export default ViewPost;
