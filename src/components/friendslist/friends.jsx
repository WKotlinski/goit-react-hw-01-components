import PropTypes from "prop-types"; // Importuj PropTypes
import friends from "../../assets/friends.json";
import css from "./frieendslist.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? css.online : css.offline;

  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <span className={`${css.status} ${statusClass}`}></span>
      <p className={css.name}>{name}</p>
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
    <ul className={css.friendList}>
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
