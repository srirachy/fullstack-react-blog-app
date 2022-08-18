import styled from 'styled-components';
import { useAppDispatch } from '../../store/hooks';
import { setEditor } from '../../store/postSlice';

const EditWrapper = styled.section``;

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
