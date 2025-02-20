import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendsListItem}>
      <img src={avatar} alt={`Avatar of ${name}`} width="48" />
      <p>{name}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Ofline"}
      </p>
    </div>
  );
};

export default FriendListItem;
