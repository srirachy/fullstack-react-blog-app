import React, { ChangeEvent, useState, useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import {
  addCommunity,
  getCommunities,
} from '../../store/communitySlice';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import funcs from '../../utils/Functions';

type CommunityProps = {
  uniqueName: string;
  displayName: string;
};

function Community() {
  const [newCommunity, setNewCommunity] = useState<string>('');
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { community } = useAppSelector(
    (state: RootState) => state.community,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getCommunities());
  }, [dispatch]);

  const handleCommunity = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCommunity(e.target.value);
  };

  // this will route to selected community
  const viewCommunityPosts = () => {
    if (selectedCommunity) {
      const cObj = community.find((comm) => {
        return comm.displayName === selectedCommunity ? comm : '';
      });
      navigate(`/c/${cObj?.uniqueName}`);
    } else {
      navigate('/');
    }
  };

  const addNew = () => {
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
        <label htmlFor="theCommunity">
          View By Community:
          <select
            onChange={handleCommunity}
            id="theCommunity"
            value={selectedCommunity}
          >
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
