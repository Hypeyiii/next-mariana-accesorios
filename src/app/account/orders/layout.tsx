export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col text-center items-center justify-center w-[90%] m-auto gap-2">
      {children}
    </div>
  );
}
