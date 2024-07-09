"use client";

import { withAuth } from "@/app/hoc/withAuth";
import { useUsers } from "@/app/hooks/useUser";
import { teko, concertOne } from "@/app/ui/fonts";

function Page() {
  const { user } = useUsers();
  return (
    <div className="flex flex-col gap-2 w-full m-auto text-black mt-5 md:mt-10">
      <p className="text-xl">My perfil</p>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex flex-col gap-1 relative">
          <span className={`${concertOne.className} text-sm font-thin`}>Nombre de usuario:</span>
          <span
            className={`${teko.className} text-lg`}
          >
            {user?.username}
          </span>
        </div>
        <div className="flex flex-col gap-1 relative">
          <span className={`${concertOne.className} text-sm font-thin`}>Correo electrónico:</span>
          <span
            className={`${teko.className} text-lg`}
          >
            {user?.email}
          </span>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Page);
