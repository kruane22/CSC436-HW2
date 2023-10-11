import "./App.css";
import ListComponent from "./components/ListComponent";
import { useState } from "react";
import UserBar from "./UserBar";
import CreateNewItem from "./components/CreateNewItem";
import moment from 'moment';

function App() {
  const [listItem, setListItem] = useState([]);

  const [user, setUser] = useState("");

  const handleCompletedBox = (id) => {
    const temporaryList = listItem.map((element) => {
      if (element.id == id) {
        let dateComplete = element.complete==false ? `Completed on: ${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}` : "";
        return {
          ...element,
          complete: !element.complete,
          dateComplete: dateComplete
        };
      } else return element;
    });
    setListItem(temporaryList);
  };

  const handleUserName = (newName) => {
    setUser(newName);
  };

  const handleNewListItem = (newItem) => {
    const item = { ...newItem, author: user, complete: false };
    const newList = [item, ...listItem];
    setListItem(newList);
  };

  const handleLogout = () => {
    setUser("");
    setListItem([])
  }

  return (
    <div className="App">
      <UserBar user={user} handleSubmit={handleUserName} handleLogout={handleLogout} />

      {user && <CreateNewItem handleNewListItem={handleNewListItem} />}

      {user && (
        <ListComponent
          listItem={listItem}
          setListItem={setListItem}
          handleCompletedBox={handleCompletedBox}
        />
      )}
    </div>
  );
}

export default App;
