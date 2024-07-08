"use client";

import { withAuth } from "@/app/hoc/withAuth";
import { useUsers } from "@/app/hooks/useUser";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { teko, concertOne } from "@/app/ui/fonts";

function Page() {
  const { clearUser, user } = useUsers();
  return (
    <div className="flex flex-col gap-2 w-full m-auto text-black p-12">
      <span className="flex flex-row justify-center items-center text-center gap-2">
        <ShieldCheckIcon className="size-8" />
        <p className="text-xl">Información personal</p>
      </span>
      <div className="grid grid-cols-2 w-full gap-6">
        <div className="col-span-1 flex flex-col gap-1 relative">
          <span className={`${concertOne.className} text-sm`}>Nombre:</span>
          <span
            className={`${teko.className} text-lg p-2 border border-black/10 shadow rounded-xl`}
          >
            {user?.username}
          </span>
        </div>
        <div className="col-span-1 flex flex-col gap-1 relative">
          <span className={`${concertOne.className} text-sm`}>Correo:</span>
          <span
            className={`${teko.className} text-lg p-2 border border-black/10 shadow rounded-xl`}
          >
            {user?.email}
          </span>
        </div>
      </div>
      <span className="flex items-center justify-center w-full">
        <button
          className="text-black text-xs uppercase hover:shadow-lg shadow-lg shadow-blue-200 px-4 py-3"
          onClick={() => clearUser()}
        >
          Cerrar sesión
        </button>
      </span>
    </div>
  );
}

export default withAuth(Page);
