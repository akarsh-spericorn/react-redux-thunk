import Skelton from '../../components/Skelton';

const UserList = () => {
  return (
    <div className="space-y-4">
      <Skelton height="h-6" itemNumber={5} />
      {/* users.map((user) => <Panel key={user.id} user={user} /> */}
    </div>
  );
};

export default UserList;
