import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { deletePost } from '../../store/postSlice';

function DeletePost() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatchDelete = () => {
    if (id) {
      dispatch(deletePost(id));
      navigate(-1); // go back to previous page
    }
  };

  return (
    <button type="button" onClick={() => dispatchDelete()}>
      Delete
    </button>
  );
}

export default DeletePost;
