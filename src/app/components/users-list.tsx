/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { User } from "@/app/lib/types";
import { teko } from "../ui/fonts";
import Link from "next/link";

export function LatestUsers({ users = [] }: { users: User[] }) {
  return (
    <div className="col-span-5 flex flex-col gap-2">
      <h1 className="text-sm md:text-lg font-bold uppercase">Latest users</h1>
      <div className="col-span-5 text-white bg-gray-50 rounded-lg p-2 md:p-5">
        <table className="min-w-full bg-white p-5 rounded-lg">
          <thead>
            <tr className="text-black text-[8px] md:text-xs uppercase">
              <th className="py-4 px-4 border-b">Customer</th>
              <th className="py-4 px-4 border-b">Email</th>
              <th className="py-4 px-4 border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user.id} className="border-b">
                <td className="py-4 px-4 flex items-center">
                  <img
                    src="https://avatar.iran.liara.run/public/34"
                    alt={user.username}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-[10px] md:text-sm font-semibold text-black">
                      {user.username}
                    </p>
                  </div>
                </td>
                <td className="text-[10px] py-4 px-4 text-black md:text-xs">
                  {user.email}
                </td>
                <td className="text-[10px] py-4 px-4 text-black md:text-xs">
                  {user.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AllUsers({ users = [] }: { users: User[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.role.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  return (
    <div className="col-span-12 w-full flex flex-col gap-2">
      <span className="flex flex-row justify-between items-center">
        <h1
          className={`${teko.className} text-lg md:text-2xl font-bold uppercase`}
        >
          All users
        </h1>
        <input
          type="text"
          placeholder="Busca usuarios por nombre y correo"
          className={`${teko.className} px-4 py-2 rounded-lg border border-gray-100 text-gray-400 w-2/3 md:w-2/4`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </span>
      <div className="col-span-5 text-white bg-gray-50 rounded-lg p-2 md:p-5">
        <table className="min-w-full text-center bg-white p-5 rounded-lg">
          <thead>
            <tr className="text-black text-[8px] md:text-xs uppercase">
              <th className="py-4 px-4 border-b hidden md:table-cell">Id</th>
              <th className="py-4 px-4 border-b">Customer</th>
              <th className="py-4 px-4 border-b">Email</th>
              <th className="py-4 px-4 border-b">Role</th>
              <th className="py-4 px-4 border-b hidden md:table-cell">
                Creación
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user: User) => (
              <tr
                key={user.id}
                className="border-b text-black hover:bg-gray-100 hover:text-black/70 cursor-pointer"
              >
                <td className="text-[10px] py-4 px-4 md:text-xs hidden md:table-cell">
                  {user.id}
                </td>
                <td className="py-4 px-4 flex items-center">
                  <Link href={`/dashboard/users/${user.id}`}>
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
                  {user.email}
                </td>
                <td className="text-[10px] py-4 px-4 md:text-xs">
                  {user.role}
                </td>
                <td className="text-[10px] py-4 px-4 md:text-xs hidden md:table-cell">
                  {user.created_at?.toString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function SingleUser({ user }: { user: User }) {
  return (
    <div className="col-span-12 w-full flex flex-col gap-2">
      <span className="flex flex-row justify-between items-center">
        <h1
          className={`${teko.className} text-lg md:text-2xl font-bold uppercase`}
        >
          Usuario
        </h1>
      </span>
      <div className="col-span-5 text-white bg-gray-50 rounded-lg p-2 md:p-5">
        <table className="min-w-full text-center bg-white p-5 rounded-lg">
          <thead>
            <tr className="text-black text-[8px] md:text-xs uppercase">
              <th className="py-4 px-4 border-b hidden md:table-cell">Id</th>
              <th className="py-4 px-4 border-b">Customer</th>
              <th className="py-4 px-4 border-b">Email</th>
              <th className="py-4 px-4 border-b">Role</th>
              <th className="py-4 px-4 border-b hidden md:table-cell">
                Creación
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              key={user.id}
              className="border-b text-black hover:bg-gray-100 hover:text-black/70 cursor-pointer"
            >
              <td className="text-[10px] py-4 px-4 md:text-xs hidden md:table-cell">
                {user.id}
              </td>
              <td className="py-4 px-4 flex items-center">
                <Link href={`/dashboard/users/${user.id}`}>
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
              <td className="text-[10px] py-4 px-4 md:text-xs">{user.email}</td>
              <td className="text-[10px] py-4 px-4 md:text-xs">{user.role}</td>
              <td className="text-[10px] py-4 px-4 md:text-xs hidden md:table-cell">
                {user.created_at?.toString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
