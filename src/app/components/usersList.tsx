/* eslint-disable @next/next/no-img-element */
"use client";

import { User } from "../lib/types";

export default function LatestUsers({ users = [] }: { users: User[] }) {
  return (
    <div className="col-span-5 flex flex-col gap-2">
    <h1 className="text-lg font-bold uppercase">Latest users</h1>
      <div className="col-span-5 text-white bg-gray-50 rounded-lg p-5">
      <table className="min-w-full bg-white p-5 rounded-lg">
        <thead>
          <tr className="text-black text-xs uppercase">
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
                  <p className="text-sm font-semibold text-black">{user.username}</p>
                </div>
              </td>
              <td className="py-4 px-4 text-black text-xs">{user.email}</td>
              <td className="py-4 px-4 text-black text-xs">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
