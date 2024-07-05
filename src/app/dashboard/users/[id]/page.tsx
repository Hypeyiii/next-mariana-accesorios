import { getUserById } from "@/app/api/users/users";
import { SingleUser } from "@/app/components/users-list";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const user = await getUserById(id);
  return (
    <>
      {" "}
      <span className="flex flex-col gap-2 justify-center items-center m-auto text-center col-span-12 md:col-span-2 w-full"></span>
      <div className="col-span-12 md:col-span-10 py-4 md:py-12 px-4 text-black grid grid-cols-12 gap-5 md:gap-10 w-full h-fit md:mt-0">
        {user && <SingleUser user={user} />}
      </div>
      ;
    </>
  );
}
