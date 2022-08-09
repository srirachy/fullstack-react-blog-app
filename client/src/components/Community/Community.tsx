import React, { ChangeEvent, useState, useEffect } from 'react';
import './Community.css';
import { shallowEqual } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  addCommunity,
  getCommunities,
} from '../../store/communitySlice';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import funcs from '../../utils/Functions';

type CommunityProps = {
  uniqueName: String;
  displayName: String;
};

function Community() {
  // const [communities, setCommunities] = useState<string[]>([]);
  const [newCommunity, setNewCommunity] = useState<string>('');
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
    const lcName = funcs.slugify(newCommunity);
    const commObj = {
      uniqueName: lcName,
      displayName: newCommunity,
    };
    dispatch(addCommunity(commObj));
    setNewCommunity('');
  };

  return (
    <div>
      <div>
        <label htmlFor="setCommunity">
          View By Community:
          <select onChange={handleCommunity} id="setCommunity">
            <option value="">All</option>
            {Object.values(community).map((com: CommunityProps) => {
              return (
                <option key={nanoid()}>{com.displayName}</option>
              );
            })}
          </select>
        </label>
        <button type="button" onClick={viewCommunityPosts}>
          View Community Post
        </button>
      </div>
      <div>
        <label htmlFor="addCommunity">
          Add New Community:
          <input
            id="addCommunity"
            type="Community Name"
            value={newCommunity}
            onChange={(e) => setNewCommunity(e.target.value)}
          />
        </label>
        <button type="button" onClick={addNew}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Community;
