import Breadcrum from "@/app/components/breadcrum";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Breadcrum homeElement={"Home"} separator={"/"} />
      {children}
    </section>
  );
}