import "./App.css";
import FriendList from "./components/friendslist/friends";
import UserProfile from "./components/profile/profile";
import Statistic from "./components/statistics/statistics";
import TransactionHistory from "./components/transactionhistory/transactionhistory";
import friends from "./assets/friends.json";
import user from "./assets/user.json";
import stat from "./assets/data.json";
import transactions from "./assets/transactions.json";

function App() {
  return (
    <>
      <UserProfile {...user} />
      <Statistic stats={stat} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </>
  );
}

export default App;
