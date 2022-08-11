<<<<<<< HEAD
import React, { useEffect } from 'react';
import axios from 'axios';
=======
import React, { Key, useEffect } from 'react';
>>>>>>> 42dafef5b0fc92a03ee9745d2d1afcebc6a8a822
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPosts } from '../../store/postSlice';

const TempWrapper = styled.div``;

const PostWrapper = styled.div`
`;

type PostProps = {
<<<<<<< HEAD
  _id: String;
=======
  _id: Key | null | undefined;
>>>>>>> 42dafef5b0fc92a03ee9745d2d1afcebc6a8a822
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

  const { community } = useAppSelector(
    (state: RootState) => state.community,
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
        let cObj;
        if (post) {
          cObj = community.find((comm) => {
            return comm.displayName === post.community ? comm : '';
          });
        }
        return (
          
          <Link
            // /c/${community.slugifiedName}/${post.slugifiedName}
            to={`/c/${cObj?.uniqueName}/post/${post._id}`}
            key={post._id}
          >
            <PostWrapper>
              <h3>{post.title}</h3>
              <h4>{post.userName}</h4>

              <p>{post.body}</p>
            <button type="button" onClick={()=>deletePost(post._id)}>Delete</button>
              </PostWrapper>
            </Link>
           
         
        );
      })}
    </TempWrapper>
  );
}

export default Posts;
