"use client";

import { useState, useEffect } from "react";
import { AllOrders, SingleOrder } from "@/app/components/order-list";
import { useUsers } from "@/app/hooks/useUser";
import { Order } from "@/app/lib/types";

export default function Page() {
  const { user } = useUsers();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders");
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="">
      <AllOrders orders={orders} user={user} />
    </div>
  );
}
