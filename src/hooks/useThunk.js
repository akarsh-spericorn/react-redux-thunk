import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';

const useThunk = (thunk) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callThunk = useCallback(
    (...args) => {
      setLoading(true);
      setError(null);
      dispatch(thunk(...args))
        .unwrap()
        .then((a) => {})
        .catch((e) => {
          setError(e);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [thunk, dispatch],
  );

  return [callThunk, loading, error];
};

export default useThunk;
