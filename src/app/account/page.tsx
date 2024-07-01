"use client";

import { withAuth } from "@/app/hoc/withAuth";
import { useUsers } from "@/app/hooks/useUser";

function AccountPage() {
  const { clearUser, user } = useUsers();
  return (
    <div className="flex flex-col gap-2 w-[90%] m-auto mt-32 text-black">
      <h1 className="text-black">Email: {user?.email}</h1>
      <button onClick={() => clearUser()}>Cerrar sesión</button>
    </div>
  );
}

export default withAuth(AccountPage);
