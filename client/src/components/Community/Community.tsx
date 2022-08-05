import React, { ChangeEvent, useState, useEffect } from 'react';
import './Community.css';
import { shallowEqual } from 'react-redux';
import {
  addCommunity,
  getCommunities,
} from '../../store/communitySlice';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

function Community() {
  // const [communities, setCommunities] = useState<string[]>([]);
  const [newCommunity, setNewCommunity] = useState('');
  // const [selectedCommunity, setSelectedCommunity] = useState('');
  const dispatch = useAppDispatch();
  const { community } = useAppSelector(
    (state: RootState) => state.community,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getCommunities());
  }, [dispatch]);

  useEffect(() => {
    console.log(community);
  });

  const handleCommunity = (e: ChangeEvent<HTMLSelectElement>) => {
    // setSelectedCommunity(e.target.value);
    console.log(e);
  };

  // this will route to selected community
  const viewCommunityPosts = () => {
    // dispatch(setCommunity(selectedCommunity));
  };

  const addNew = () => {
    console.log(newCommunity);
    console.log('imma send it');
    dispatch(addCommunity(newCommunity));
    setNewCommunity('');
  };

  return (
    <div>
      <div>
        <h1>View By Community</h1>
        <select onChange={handleCommunity}>
          <option value="">All</option>
          {Object.values(community).map((com: any) => {
            return <option key={com.name}>{com.name}</option>;
          })}
        </select>
        <button type="button" onClick={viewCommunityPosts}>
          View Community Post
        </button>
      </div>
      <div>
        <h1>Add New Community</h1>
        <input
          type="Community Name"
          value={newCommunity}
          onChange={(e) => setNewCommunity(e.target.value)}
        />
        <button type="button" onClick={addNew}>
          Add Community
        </button>
      </div>
    </div>
  );
}

export default Community;
