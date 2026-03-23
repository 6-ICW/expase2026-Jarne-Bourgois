import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";

interface Gebruiker {
  id: number;
  naam: string;
}

export default function App() {
  const [gbrnaam, setGbrnaam] = useState<Gebruiker[]>([]);
  const GeregistreerdePersonen = ["Karel", "Els", "Piet"];

  const onSubmit = (naam: string) => {
    const newId =
      gbrnaam.length > 0 ? Math.max(...gbrnaam.map((g) => g.id)) + 1 : 1;
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
