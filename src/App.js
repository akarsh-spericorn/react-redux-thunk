import React, { useEffect } from 'react';
import { getUsers } from './store/thunks/getUsers';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => {
    return state.users;
  });
  console.log({ data, loading, error });
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return <div>{data.length}</div>;
};

export default App;
