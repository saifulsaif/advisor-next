
import { fetchUsers } from "@/utils/api";

export default async function Page() {
  const users = await fetchUsers();

  
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      {users.data.map((user) => (
        <div key={user.id}>
          {user.name} {user.id}
        </div>
      ))}
    </div>
  );
}
