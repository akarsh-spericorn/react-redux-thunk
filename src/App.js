import UserList from './containers/UserList';

import PanelLayout from './components/PanelLayout';

export default function App() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <PanelLayout label={'Users'} buttonName={'Add Users'}>
        <UserList />
      </PanelLayout>
    </div>
  );
}
