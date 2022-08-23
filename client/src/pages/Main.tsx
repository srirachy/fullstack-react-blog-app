import styled from 'styled-components';
import News from '../components/News/News';
import img from '../img/Space.jpg';
import HomePage from './HomePage';

const Space = styled.div`
  background-image: url(${img});
  position: relative;
  // max-width: 100vw;
  // height: 100vh;
`;

function Main() {
  return (
    <Space>
      <News />
      <HomePage />
      {/* <Posts />
      <Community /> */}
    </Space>
  );
}

export default Main;
