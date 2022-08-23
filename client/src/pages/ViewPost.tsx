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
import color_sky from '../img/color_sky.jpg';

type PageProps = {
  isFixed: boolean;
};

const PageWrapper = styled.div<PageProps>`
  max-width: 100vw;
  height: 100vh;
  text-align: center;
  position: ${(props) => (props.isFixed ? 'fixed' : 'relative')};
  background-image: url(${color_sky});
  background-repeat: 'no-repeat';
  background-position: 'center center';
  background-attachment: 'fixed';
  background-size: 'cover';
`;
const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  margin: 0 auto;
  padding: 0 10px;
`;
const TextWrapper = styled.div`
  .theTitle {
    font-weight: bold;
  }
  .theBody {
    min-height: 20vh;
  }
`;

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
    <PageWrapper isFixed={editor}>
      {editor && <EditPostModal post={post} />}
      <PostWrapper>
        {post.title && (
          <TextWrapper>
            <p className="theTitle">{post?.title}</p>
            <p className="theBody">{post?.body}</p>
          </TextWrapper>
        )}
        <EditPost />
        <DeletePost />
      </PostWrapper>
    </PageWrapper>
  );
}

export default ViewPost;
