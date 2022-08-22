import styled from 'styled-components';
import Community from '../components/Community/Community';
import News from '../components/News/News';
import Posts from '../components/Post/Posts';
import img from '../img/Space.jpg';

const Space = styled.div`
  background-image: url(${img});
  position: relative;
  width: 100vw;
  height: 100vh;
`;

function Main() {
  return (
    <Space>
      <News />
      <Posts />
      <Community />
    </Space>
  );
}

export default Main;
