import { useEffect, useState } from 'react';
import styled from 'styled-components';

type CurrentPost = {
  title: String;
  body: String;
  community: String;
  userName: String;
  stringifiedName: String;
};

const PostWrapper = styled.div``;

function ViewPost() {
  // const { id } = useParams();
  const [curPost, setCurPost] = useState<CurrentPost>();
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const res = await API.getData(`api/posts/${id}`);
  //     setCurPost(res.data);
  //   };
  //   fetchPost();
  // }, [id]);
  useEffect(() => {
    setCurPost({
      title: 'meow',
      body: 'meow meow meow',
      community: 'meowy',
      userName: 'mrmeow',
      stringifiedName: 'meow-meow-meow',
    });
  }, []);

  useEffect(() => {
    if (curPost) {
      console.log(curPost);
    }
  }, [curPost]);

  return <PostWrapper>{curPost && curPost.title}</PostWrapper>;
}

export default ViewPost;
