import "./App.css";
import FriendList from "./components/friendslist/friends";
import UserProfile from "./components/profile/profile";
import Statistic from "./components/statistics/statistics";

function App() {
  return (
    <>
      <UserProfile />
      <Statistic />
      <FriendList />
    </>
  );
}

export default App;
