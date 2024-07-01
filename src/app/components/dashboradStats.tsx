import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { teko } from "../ui/fonts";

export default async function DashboardStats({
  moneyStat,
  pendingStat,
  orderStat,
  userStat,
}: {
  moneyStat: number;
  pendingStat: number;
  orderStat: number;
  userStat: number;
}) {
  return (
    <div className="col-span-12 grid grid-cols-4 gap-3 md:gap-10 w-full justify-center items-center m-auto">
      <Card
        stat={moneyStat}
        title="Collected"
        icon={<BanknotesIcon className="size-3 md:size-5" />}
        simbol="$"
      />
      <Card
        stat={pendingStat}
        title="Pendiente"
        icon={<ClockIcon className="size-3 md:size-5" />}
        simbol=""
      />
      <Card
        stat={orderStat}
        title="Pedido totales"
        icon={<InboxIcon className="size-3 md:size-5" />}
        simbol=""
      />
      <Card
        stat={userStat}
        title="Usuarios totales"
        icon={<UserGroupIcon className="size-3 md:size-5" />}
        simbol=""
      />
    </div>
  );
}

interface CardProps {
  stat: number;
  title: string;
  icon: JSX.Element;
  simbol: string;
}
export const Card = ({ stat, title, icon, simbol }: CardProps) => {
  return (
    <div className="w-full col-span-2 md:col-span-1 flex flex-col gap-0 md:gap-2 items-start justify-start p-1 md:p-6 bg-gray-50 rounded-lg">
      <span className="flex flex-row gap-1 items-center">
        {icon}
        <h1 className="text-xs md:text-base">{title}</h1>
      </span>
      <span
        className={`${teko.className} text-sm md:text-lg lg:text-2xl font-bold w-full px-2 md:px-4 py-2 md:py-6 bg-white text-center`}
      >
        {simbol}
        {stat}
      </span>
    </div>
  );
};
