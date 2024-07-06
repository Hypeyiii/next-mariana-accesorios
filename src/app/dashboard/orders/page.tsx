import { teko } from "@/app/ui/fonts";
import { getOrders } from "@/app/fetching/orders/getOrders";
import { AllOrders } from "@/app/components/order-list";
import { getUserById } from "@/app/fetching/users/users";

export async function getServerSideProps() {
  try {
    const orders = await getOrders();
    const userId = orders[0]?.userid;
    const user = userId ? await getUserById(userId) : null;

    return {
      props: { orders, user },
    };
  } catch (error) {
    console.error("Error fetching orders or user:", error);
    return {
      props: { orders: [], user: null },
    };
  }
}

export default function Page({ orders, user }: { orders: any[]; user: any }) {
  return (
    <>
      <span className="flex flex-col gap-2 justify-center items-center m-auto text-center col-span-12 md:col-span-2 w-full"></span>
      <div className="col-span-12 md:col-span-10 py-4 md:py-12 px-4 text-black grid grid-cols-12 gap-5 md:gap-10 w-full h-fit md:mt-0">
        <span className="col-span-12 h-fit">
          <h1
            className={`${teko.className} text-xl md:text-4xl font-bold uppercase`}
          >
            Bienvenido a la sección de ordenes
          </h1>
          <p className="text-xs md:text-base">
            Aqui podrás encontrar la lista de ordenes hechas en la página.
          </p>
        </span>
        <AllOrders orders={orders} user={user} />
      </div>
    </>
  );
}
