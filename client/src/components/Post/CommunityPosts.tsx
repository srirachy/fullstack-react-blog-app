import { Key, useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPosts } from '../../store/postSlice';

const TempWrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
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

function CommunityPosts() {
  const { community: cName } = useParams();
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
      {Object.values(posts).map((post: PostProps) => {
        let cObj;
        if (post) {
          cObj = community.find((comm) => {
            return comm.uniqueName === cName ? comm : '';
          });
        }
        return post.community === cObj?.displayName ? (
          <PostWrapper>
            <Link
              to={`/c/${cObj?.uniqueName}/post/${post._id}`}
              key={post._id}
            >
              <Thoughts>
                <h3>{post.title}</h3>
                <p>{post.userName}</p>
              </Thoughts>
            </Link>
          </PostWrapper>
        ) : (
          ''
        );
      })}
    </TempWrapper>
  );
}

export default CommunityPosts;
