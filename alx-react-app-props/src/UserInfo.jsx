function UserInfo({ userData }) {
  return <UserDetails userData={userData} />;
}

import UserDetails from './UserDetails';

function UserInfo() {
  return <UserDetails />;
}

export default UserInfo;
