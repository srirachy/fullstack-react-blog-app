import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

type CurrentPost = {
  id: number | string;
  title: string;
  author: string;
};

const PostWrapper = styled.div``;

function ViewPost() {
  const { id } = useParams();
  const [curPost, setCurPost] = useState<CurrentPost>();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`http://localhost:3000/posts/${id}`);
      const json = await res.json();
      console.log(json);
      setCurPost(json);
    };
    fetchPost();
  }, [id]);

  useEffect(() => {
    if (curPost) {
      console.log(curPost);
    }
  }, [curPost]);

  return <PostWrapper>{curPost && curPost.title}</PostWrapper>;
}

export default ViewPost;
