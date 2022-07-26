import React, { useEffect } from 'react';
import styled from 'styled-components';

const TempWrapper = styled.div``;

function Posts() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/posts/');
      const json = await res.json();
      console.log(json);
    };
    fetchData();
  }, []);

  return <TempWrapper />;
}

export default Posts;
