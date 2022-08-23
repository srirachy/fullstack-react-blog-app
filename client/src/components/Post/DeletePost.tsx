import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../../store/hooks';
import { deletePost } from '../../store/postSlice';

const DeleteWrapper = styled.div`
  button {
    min-width: 20vw;
    color: #ffffff;
    background-color: #5c150f;
    border-radius: 12px;
  }
`;

export function DeleteButton(props: { onClickHandler: any }) {
  const { onClickHandler } = props;
  return (
    <DeleteWrapper>
      <button type="button" onClick={onClickHandler}>
        Delete
      </button>
    </DeleteWrapper>
  );
}

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
