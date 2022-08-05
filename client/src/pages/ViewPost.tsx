import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import API from '../utils/API';

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
      const res = await API.getData(`api/posts/${id}`);
      setCurPost(res.data);
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
