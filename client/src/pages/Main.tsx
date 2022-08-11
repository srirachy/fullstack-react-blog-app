import Community from '../components/Community/Community';
import News from '../components/News';
import Posts from '../components/Post/Posts';

function Main() {
  // const [posts, setPosts] = useState<PostData[]>(initPosts);

  return (
    <>
    <News />
      <Posts />
      <Community />
      <div>meow</div>
    </>
  );
}

export default Main;
