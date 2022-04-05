import useUser from "../../hooks/use-user";
import User from './User'
import Suggestions from './Suggestions'
function Sidebar() {
  const {
    user: {docId, fullName, username, userId ,following},
  } = useUser();
  console.log(fullName, username, userId);
  return (
    <div className="p-4 ">
      <User username={username} fullName={fullName}/>
      <Suggestions userId={userId} following={following} docId={docId}/>
    </div>
  );
}

export default Sidebar;
