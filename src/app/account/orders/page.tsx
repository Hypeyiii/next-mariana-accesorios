"use client";

import { useState, useEffect } from "react";
import { AllOrders } from "@/components/account/order-list";
import { useUsers } from "@/hooks/useUser";
import { Order } from "@/lib/types";

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
      <AllOrders orders={orders} user={user} loading={loading} />
  );
}
