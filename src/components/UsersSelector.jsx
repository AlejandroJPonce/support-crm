import { useContext, useEffect, useState } from "react";
import "./componentsStyles/UsersSelector.css";
import { dataBaseContext } from "../context/databaseContext";
import CreatableSelect from "react-select/creatable";

export default function UsersSelector() {
  const { users, createRoom } = useContext(dataBaseContext);
  const [usuarios, setUsuarios] = useState([]);
  const [inputValue, setInputValue] = useState();

  function handleShowUsers() {
    let aux = []
    users.forEach(element => {
      aux.push({
        value: element,
        label: element.name + ' ' + element.lastName
      })
    });
    setUsuarios(aux);
  }

  function selectedUser(event) {
    const userActiveSession = JSON.parse(sessionStorage.getItem('activeUser'))
    createRoom(userActiveSession.uid, event.value.uid)
  }

  useEffect(() => {
    handleShowUsers();
  }, [users]);

  return (
    <>
      <CreatableSelect
        value={inputValue}
        className="selector"
        isClearable
        options={usuarios}
        onChange={(e) => selectedUser(e)}
      />
    </>
  );
}
