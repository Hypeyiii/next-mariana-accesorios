/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { Order, User } from "@/app/lib/types";
import { teko } from "@/app/ui/fonts";
import Link from "next/link";

export function AllOrders({ orders = [], user }: { orders: Order[], user: any }) {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  // useEffect(() => {
  //   setFilteredUsers(
  //     users.filter(
  //       (user) =>
  //         user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         user.role.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  // }, [searchTerm, users]);

  return (
    <div className="col-span-12 w-full flex flex-col gap-2">
      <span className="flex flex-row justify-between items-center">
        <h1
          className={`${teko.className} text-lg md:text-2xl font-bold uppercase`}
        >
          All users
        </h1>
        {/* <input
            type="text"
            placeholder="Busca usuarios por nombre y correo"
            className={`${teko.className} px-4 py-2 rounded-lg border border-gray-100 text-gray-400 w-2/3 md:w-2/4`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
      </span>
      <div className="col-span-5 text-white bg-gray-50 rounded-lg p-2 md:p-5">
        <table className="min-w-full text-center bg-white p-5 rounded-lg">
          <thead>
            <tr className="text-black text-[8px] md:text-xs uppercase">
              <th className="py-4 px-4 border-b hidden md:table-cell">Id</th>
              <th className="py-4 px-4 border-b">Hecha por:</th>
              <th className="py-4 px-4 border-b">status</th>
              <th className="py-4 px-4 border-b">Amount</th>
              <th className="py-4 px-4 border-b hidden md:table-cell">
                Creación
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: Order) => (
              <tr
                key={order.id}
                className="border-b text-black hover:bg-gray-100 hover:text-black/70 cursor-pointer"
              >
                <td className="text-[10px] py-4 px-4 md:text-xs hidden md:table-cell">
                  {order.id}
                </td>
                <td className="py-4 px-4 flex items-center">
                  <Link href={`/dashboard/orders/${order.id}`}>
                    <img
                      src="https://avatar.iran.liara.run/public/34"
                      alt={user.username}
                      className="w-10 h-10 rounded-full mr-2"
                    />
                  </Link>
                  <div>
                    <p className="text-[10px] md:text-sm font-semibold">
                      {user.username}
                    </p>
                  </div>
                </td>
                <td className="text-[10px] py-4 px-4 md:text-xs">
                  {order.status}
                </td>
                <td className="text-[10px] py-4 px-4 md:text-xs">
                  {order.amount}
                </td>
                <td className="text-[10px] py-4 px-4 md:text-xs hidden md:table-cell">
                  {order.created_at?.toString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
