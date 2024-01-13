import PropTypes from "prop-types"; // Importuj PropTypes
import friends from "../../assets/friends.json";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? "online" : "offline";

  return (
    <li className="item">
      <span className={`status ${statusClass}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
const FriendLists = () => <FriendList friends={friends} />;
export default FriendLists;
