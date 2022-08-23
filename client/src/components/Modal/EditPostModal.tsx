import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  ChangeEvent,
  FormEvent,
  Key,
  useEffect,
  useState,
} from 'react';
import { shallowEqual } from 'react-redux';
import { setEditor, updatePost } from '../../store/postSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store';
import { getCommunities } from '../../store/communitySlice';
import funcs from '../../utils/Functions';

const ModalBkgd = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.section`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 25px;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
`;

const ModalFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  label {
    display: flex;
    flex-direction: column;
    max-width: 90%;
    height: 100%;
    text-align: left;
    margin: 0 auto;
    #theBody {
      min-height: 200px;
    }
  }
  button {
    margin-top: 10px;
    width: 90%;
  }
  #submitButton {
    color: #ffffff;
    background-color: #30495c;
    border-radius: 12px;
  }
  #cancelButton {
    color: #ffffff;
    background-color: #5c150f;
    border-radius: 12px;
  }
`;

type CommunityProps = {
  uniqueName: string;
  displayName: string;
};

type PostProps = {
  _id: Key | null | undefined;
  title: string;
  body: string;
  community: string;
  userName: string;
  slugifiedName: string;
};

type PostType = {
  post: PostProps;
};

function EditPostModal({ post }: PostType) {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userName, setUserName] = useState('Anon');
  const [slugifiedName, setSlugifiedName] = useState('');
  const [community, setCommunity] = useState('');
  const [sendDispatch, setSendDispatch] = useState(false);
  const [formObj, setFormObj] = useState({
    theTitle: '',
    theBody: '',
    theCommunity: '',
  });
  const { theTitle, theBody, theCommunity } = formObj;
  const { community: comm } = useAppSelector(
    (state: RootState) => state.community,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getCommunities());
  }, [dispatch]);

  useEffect(() => {
    if (post) {
      setFormObj({
        theTitle: post.title,
        theBody: post.body,
        theCommunity: post.community,
      });
    }
  }, [post]);

  const handleCommunity = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormObj({ ...formObj, [id]: value });
  };

  useEffect(() => {
    if (sendDispatch) {
      const curId = post._id;
      const postObj = {
        curId,
        title,
        body,
        community,
        userName,
        slugifiedName,
      };
      dispatch(updatePost(postObj));
      dispatch(setEditor(false));
    }
  }, [
    body,
    community,
    dispatch,
    post._id,
    sendDispatch,
    slugifiedName,
    title,
    userName,
  ]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sName = funcs.slugify(`${theTitle}`);
    setTitle(`${theTitle}`);
    setBody(`${theBody}`);
    if (theCommunity) {
      setCommunity(`${theCommunity}`);
    } else {
      setCommunity(`${comm[0].displayName}`);
    }
    setUserName(userName); // may need to change this later when user auth is good
    setSlugifiedName(sName);
    setSendDispatch(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormObj({ ...formObj, [id]: value });
  };

  const handleTextAreaChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormObj({ ...formObj, [id]: value });
  };

  const dispatchEditor = () => {
    dispatch(setEditor(false));
  };

  return (
    <ModalBkgd>
      <ModalWrapper>
        <CloseButtonWrapper>
          <button type="button" onClick={() => dispatchEditor()}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </CloseButtonWrapper>
        <ModalFormWrapper>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="theTitle">
              Title:
              <input
                id="theTitle"
                type="string"
                value={theTitle}
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="theBody">
              Body:
              <textarea
                id="theBody"
                value={theBody}
                onChange={handleTextAreaChange}
              />
            </label>
            <label htmlFor="theCommunity">
              Community:
              <select
                id="theCommunity"
                onChange={handleCommunity}
                value={theCommunity}
              >
                {Object.values(comm).map((com: CommunityProps) => {
                  return (
                    <option key={post._id}>{com.displayName}</option>
                  );
                })}
              </select>
            </label>
            <button type="submit" id="submitButton">
              Submit
            </button>
            <button
              type="button"
              id="cancelButton"
              onClick={() => dispatchEditor()}
            >
              Cancel
            </button>
          </form>
        </ModalFormWrapper>
      </ModalWrapper>
    </ModalBkgd>
  );
}

export default EditPostModal;
