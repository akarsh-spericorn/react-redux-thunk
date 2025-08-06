import UserList from './containers/UserList';

import PanelLayout from './components/PanelLayout';

import useThunk from './hooks/useThunk';

import { addUser } from './store';

export default function App() {
  const [onAddUser, onAddingUser] = useThunk(addUser);

  return (
    <div className="container mx-auto mt-8 px-4">
      <PanelLayout
        label={'Users'}
        buttonName={'Add Users'}
        onButtonLoad={onAddingUser}
        onHeaderButtonClick={onAddUser}
      >
        <UserList />
      </PanelLayout>
    </div>
  );
}
