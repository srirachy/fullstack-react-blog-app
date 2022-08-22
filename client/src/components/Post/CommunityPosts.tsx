import { Key, useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPosts } from '../../store/postSlice';

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
          <Link
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

export default CommunityPosts;
