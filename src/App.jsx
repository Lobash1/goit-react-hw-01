// import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
// import FriendListItem from "./components/FriendListItem/FriendListItem";
// import FriendList from "./components/FriendListItem/FriendList";
import FriendList from "./components/FriendList/FriendList";

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
    </>
  );
};
export default App;
