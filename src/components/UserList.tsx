interface gebruiker {
  id: number;
  naam: string;
}

interface Props {
  users: gebruiker[];
  registeredUsers: string[];
}

export default function UserList({ users, registeredUsers }: Props) {
  return (
    <>
      <ul>
        {users.map((gbr) => (
          <li
            key={gbr.id}
            style={
              Boolean(
                registeredUsers
                  .filter((reg) => reg.toLowerCase() == gbr.naam.toLowerCase())
                  .toString()
              ) === true
                ? { color: "green" }
                : { color: "red" }
            }
          >
            {gbr.naam}{" "}
            {Boolean(
              registeredUsers
                .filter((reg) => reg.toLowerCase() == gbr.naam.toLowerCase())
                .toString()
            ) === true
              ? "(bekende gebruiker)"
              : "(onbekende gebruiker)"}
          </li>
        ))}
      </ul>
    </>
  );
}
