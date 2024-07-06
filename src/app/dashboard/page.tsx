// import { forAdmin } from "@/app/hoc/withAuth";
import { teko } from "@/app/ui/fonts";
import { LatestUsers } from "@/app/components/users-list";
import { getUsers, getLatestUsers } from "../fetching/users/users";
import DashboardStats from "../components/dashboard-stats";

export default async function DashbordPage() {
  const latestUsers = await getLatestUsers();
  const users = await getUsers();
  return (
    <>
      <span className="col-span-12 md:col-span-2"></span>
      <div className="col-span-12 md:col-span-10 py-4 md:py-12 px-4 text-black grid grid-cols-12 gap-5 md:gap-10 w-full h-fit md:mt-0">
        <span className="col-span-12 h-fit">
          <h1
            className={`${teko.className} text-xl md:text-4xl font-bold uppercase`}
          >
            Welcome
          </h1>
          <p className="text-xs md:text-base">
            Esta es la sección de administrador, en ella puedes consultar las
            ultimas novedades de la página web
          </p>
        </span>
        <DashboardStats
          moneyStat={100}
          pendingStat={20}
          orderStat={32}
          userStat={users.length}
        />
        <LatestUsers users={latestUsers} />
      </div>
    </>
  );
}
