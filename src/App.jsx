import "./App.css";
import FriendList from "./components/friendslist/friends";
import UserProfile from "./components/profile/profile";
import Statistic from "./components/statistics/statistics";
import TransactionHistory from "./components/transactionhistory/transactionhistory";

function App() {
  return (
    <>
      <UserProfile />
      <Statistic />
      <FriendList />
      <TransactionHistory />
    </>
  );
}

export default App;
