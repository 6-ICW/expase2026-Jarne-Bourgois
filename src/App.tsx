import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";

export default function App() {
  const [gbrnaam, setGbrnaam] = useState([{ id: 1, naam: "Jarne" }]);
  const GeregistreerdePersonen = ["Karel", "Els", "Piet"];

  const onSubmit = (naam: string) => {
    const newId = Math.max(gbrnaam.length) + 1;
    const newGbr = { id: newId, naam };
    setGbrnaam([...gbrnaam, newGbr]);
    console.log(gbrnaam);
  };

  return (
    <>
      <div>
        <RegistrationForm onRegister={onSubmit} />
        <hr />
        <UserList users={gbrnaam} registeredUsers={GeregistreerdePersonen} />
      </div>
    </>
  );
}
