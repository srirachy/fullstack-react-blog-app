import styled from 'styled-components';
import { useAppDispatch } from '../../store/hooks';
import { setEditor } from '../../store/postSlice';

const EditWrapper = styled.section`
  button {
    min-width: 20vw;
    background-color: #30495c;
    color: #ffffff;
    border-radius: 12px;
  }
`;

function EditPost() {
  const dispatch = useAppDispatch();

  const dispatchEditor = () => {
    dispatch(setEditor(true));
  };

  return (
    <EditWrapper>
      <button type="button" onClick={() => dispatchEditor()}>
        Edit
      </button>
    </EditWrapper>
  );
}

export default EditPost;
