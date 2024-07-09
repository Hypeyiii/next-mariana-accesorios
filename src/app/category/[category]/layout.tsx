import Breadcrum from "@/components/common/breadcrum";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Breadcrum homeElement={"Home"} separator={"/"} />
      {children}
      
    </section>
  );
}
