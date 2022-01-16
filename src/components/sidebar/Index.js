import useUser from "../../hooks/use-user";
import User from './User'
import Suggestions from './Suggestions'
function Sidebar() {
  const {
    user: { fullName, username, userId },
  } = useUser();
  console.log(fullName, username, userId);
  return (
    <div className="p-4 ">
      <User username={username} fullName={fullName}/>
      <Suggestions userId={userId}/>
    </div>
  );
}

export default Sidebar;
