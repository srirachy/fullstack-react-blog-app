import Community from '../components/Community/Community';
import Posts from '../components/Post/Posts';

function Main() {
  // const [posts, setPosts] = useState<PostData[]>(initPosts);

  return (
    <>
      <Posts />
      <Community />
      <div>meow</div>
    </>
  );
}

export default Main;
