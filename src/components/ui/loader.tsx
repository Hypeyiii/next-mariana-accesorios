import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GiEarrings } from "react-icons/gi";

export default function Loader() {
  return (
    <span className="relative flex justify-center items-center size-24 md:size-32 text-black/80">
      <AiOutlineLoading3Quarters className="animate-spin w-full h-full" />
      <GiEarrings className="absolute inset-0 m-auto size-12 md:size-16" />
    </span>
  );
}
