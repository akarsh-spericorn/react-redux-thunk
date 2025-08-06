import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getUsers } from '../../store/index';

import Skelton from '../../components/Skelton';
import PanelLineItem from '../../components/PanelLineItem';
import useThunk from '../../hooks/useThunk';
import AlbumsList from '../AlbumsList';
import PanelLayout from '../../components/PanelLayout';

const UserList = () => {
  const { data: users, getUserLoading } = useSelector(({ users }) => users);
  const [getUsersThunk, loading] = useThunk(getUsers);
  useEffect(() => {
    getUsersThunk();
  }, [getUsersThunk]);

  const renderUsers = () => {
    return users.map((user) => (
      <div className="mt-6 pl-6" key={user.id}>
        <PanelLineItem {...user}>
          <div className="mt-6 pl-6">
            <PanelLayout
              label={'Albums'}
              buttonName={'Add Albums'}
              onButtonLoad={false}
              onHeaderButtonClick={() => {}}
            >
              <AlbumsList userID={user.id} />
            </PanelLayout>
          </div>
        </PanelLineItem>
      </div>
    ));
  };

  const showLoader = loading || getUserLoading;
  return (
    <div className="space-y-4">
      {showLoader && <Skelton height="h-6" itemNumber={5} />}
      {!showLoader && renderUsers()}
    </div>
  );
};

export default UserList;
