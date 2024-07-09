"use client";

import { useState, useEffect } from "react";
import { AllOrders } from "@/app/components/order-list";
import { useUsers } from "@/app/hooks/useUser";
import { Order } from "@/app/lib/types";

export default function Page() {
  const { user } = useUsers();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/orders");
        const data = await res.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="">
      <AllOrders orders={orders} user={user} loading={loading} />
    </div>
  );
}
