import React, {
  FormEvent,
  useState,
  useEffect,
  ChangeEvent,
} from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { shallowEqual } from 'react-redux';
import { RootState } from '../store';
import { addPost } from '../store/postSlice';
import { getCommunities } from '../store/communitySlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import funcs from '../utils/Functions';

const FormWrapper = styled.div``;

type CommunityProps = {
  uniqueName: string;
  displayName: string;
};

function SubmitPost() {
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

  const handleCommunity = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormObj({ ...formObj, [id]: value });
  };

  useEffect(() => {
    if (sendDispatch) {
      const postObj = {
        title,
        body,
        community,
        userName,
        slugifiedName,
      };
      dispatch(addPost(postObj));
      setTitle('');
      setBody('');
      setCommunity('');
      setSlugifiedName('');
      setSendDispatch(false);
      setFormObj({ theTitle: '', theBody: '', theCommunity: '' });
    }
  }, [
    sendDispatch,
    dispatch,
    title,
    body,
    community,
    userName,
    slugifiedName,
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

  return (
    <FormWrapper>
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
          <input
            id="theBody"
            type="string"
            value={theBody}
            onChange={handleInputChange}
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
                <option key={nanoid()}>{com.displayName}</option>
              );
            })}
          </select>
        </label>
        <button type="submit">Add Post</button>
      </form>
    </FormWrapper>
  );
}

export default SubmitPost;
