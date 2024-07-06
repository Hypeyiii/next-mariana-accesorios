import { teko } from "@/app/ui/fonts";
import { AllUsers } from "@/app/components/users-list";
import { getUsers } from "@/app/fetching/users/users";

export async function getServerSideProps() {
  try {
    const users = await getUsers();
    return {
      props: { users },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: { users: [] },
    };
  }
}

export default function Page({ users }: { users: any[] }) {
  return (
    <>
      <span className="flex flex-col gap-2 justify-center items-center m-auto text-center col-span-12 md:col-span-2 w-full"></span>
      <div className="col-span-12 md:col-span-10 py-4 md:py-12 px-4 text-black grid grid-cols-12 gap-5 md:gap-10 w-full h-fit md:mt-0">
        <span className="col-span-12 h-fit">
          <h1
            className={`${teko.className} text-xl md:text-4xl font-bold uppercase`}
          >
            Bienvenido a la sección de usuarios
          </h1>
          <p className="text-xs md:text-base">
            Aqui podrás encontrar la lista de usuarios registrados en la
            plataforma.
          </p>
        </span>
        <AllUsers users={users} />
      </div>
    </>
  );
}
