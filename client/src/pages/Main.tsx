import React from 'react';
import Category from '../components/Category/Category';
import Posts from '../components/Posts';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import Category, Header, Posts

function Main() {
  return (
    // <Header>
    // <Posts />
    // </Header>
    <>
    <Category />
      <Posts />
      <div>meow</div>
    </>
  );
}

export default Main;
