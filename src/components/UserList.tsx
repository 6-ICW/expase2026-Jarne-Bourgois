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
              registeredUsers.filter((reg) => reg == gbr.naam).toString() == ""
                ? { color: "green" }
                : { color: "rood" }
            }
          >
            {gbr.naam}
          </li>
        ))}
      </ul>
    </>
  );
}
