import React, { useEffect } from 'react';
import axios from 'axios';
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPosts } from '../../store/postSlice';

const TempWrapper = styled.div``;

const PostWrapper = styled.div`
`;

type PostProps = {
  _id: String;
  title: String;
  body: String;
  community: String;
  userName: String;
  slugifiedName: String;
};

function Posts() {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector(
    (state: RootState) => state.posts,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const deletePost = async (id: String) => {
    const { data } = await axios.delete(`http://localhost:9000/api/posts/delete/${id}`);
    
    alert("Deleted");
    window.location.reload();
  }

  return (
    <TempWrapper>
      {Object.values(posts).map((post: any | PostProps) => {
        console.log(post);
        return (
          <PostWrapper key={nanoid()}>
            <Link
              // /c/${community.slugifiedName}/${post.slugifiedName}
              to={`/c/${post.community}/${post.slugifiedName}`}
            >
              <h3>{post.title}</h3>
              <h4>{post.userName}</h4>
            </Link>
            <p>{post.body}</p>
            <button type="button" onClick={()=>deletePost(post._id)}>Delete</button>
          </PostWrapper>
        );
      })}
    </TempWrapper>
  );
}

export default Posts;
