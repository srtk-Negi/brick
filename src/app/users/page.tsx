import { db } from "@/server/db";

const UsersPage = async () => {
  const users = await db.query.users.findMany();

  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-bold">Users</h1>
        <p className="max-w-2xl text-center text-lg">
          This page lists all users in the database. Currently, there are{" "}
          <span className="font-semibold">{users.length}</span> users.
          <br />
          {users.length > 0 ? (
            <span className="mt-2 block">
              {users.map((user) => (
                <span key={user.id} className="block">
                  {user.name} ({user.email})
                </span>
              ))}
            </span>
          ) : (
            <span className="mt-2 block">No users found.</span>
          )}
        </p>
      </div>
    </div>
  );
};
export default UsersPage;
