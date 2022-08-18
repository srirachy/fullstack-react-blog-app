import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { deletePost } from '../../store/postSlice';

export function DeleteButton(props: { onClickHandler: any }) {
  const { onClickHandler } = props;
  return (
    <button type="button" onClick={onClickHandler}>
      Delete
    </button>
  );
}

// DeleteButton.propTypes = {
//   props: PropTypes.object.isRequired,
//   onClickHandler: PropTypes.function.isRequired,
// };

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

  return <DeleteButton onClickHandler={dispatchDelete} />;
}

export default DeletePost;
