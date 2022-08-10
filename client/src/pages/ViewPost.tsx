import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { shallowEqual } from 'react-redux';
import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPostById } from '../store/postSlice';
// import func from '../utils/Functions';

const PageWrapper = styled.div``;
const PostWrapper = styled.div``;

function ViewPost() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { post } = useAppSelector(
    (state: RootState) => state.posts,
    shallowEqual,
  );
  // const [curPost, setCurPost] = useState<CurrentPost>();
  // const { posts } = useAppSelector(
  //   (state: RootState) => state.posts,
  //   shallowEqual,
  // );

  useEffect(() => {
    if (id) {
      dispatch(getPostById(id));
    }
  }, [dispatch, id]);

  // useEffect(() => {
  //   if (posts) {
  //     const foundPost = Object.values(posts).find((post) => {
  //       const slugCommName = func.slugify(`${post.community}`);
  //       return cName === slugCommName && pName === post.slugifiedName
  //         ? post
  //         : '';
  //     });
  //     console.log(foundPost);
  //     if (foundPost) {
  //       setCurPost(foundPost);
  //     }
  //   }
  // }, [cName, pName, posts]);

  return (
    <PageWrapper>
      {post.title && (
        <PostWrapper>
          <p>{post?.title}</p>
          <p>{post?.body}</p>
        </PostWrapper>
      )}
    </PageWrapper>
  );
}

export default ViewPost;
