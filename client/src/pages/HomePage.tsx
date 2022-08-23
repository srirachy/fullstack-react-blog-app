import styled from 'styled-components';
import Community from '../components/Community/Community';
import Posts from '../components/Post/Posts';

const Fixed = styled.div`
  justify-content: right;
  padding-top: 25px;
  text-align: center;
  text-decoration: none;
`;

function HomePage() {
  return (
    <Fixed>
      <Community />
      <Posts />
    </Fixed>
  );
}

export default HomePage;
