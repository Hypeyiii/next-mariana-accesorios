export function ProductsSkeleton() {
  return (
    <div className="w-[90%] m-auto items-center justify-center mt-12 grid grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
        <>
          <span className="flex flex-col gap-2 justify-start items-start col-span-2 md:col-span-1">
            <div
              key={i}
              className="bg-white p-4 rounded-md shadow-md w-full h-[150px] md:h-[500px] hover:shadow-lg hover:shadow-black/50 transition-all animate-pulse"
            >
              <div className="w-full bg-gray-300 rounded-md animate-blink"></div>
            </div>
            <div className="p-2 flex flex-col items-start justify-start gap-2">
              <div className="w-24 h-4 bg-gray-300 rounded-md animate-blink"></div>
              <div className="w-32 h-4 bg-gray-300 rounded-md animate-blink"></div>
              <div className="w-12 h-4 bg-gray-300 rounded-md animate-blink"></div>
            </div>
          </span>
        </>
      ))}
    </div>
  );
}

export function ProductDetailsSkeleton() {
  return (
    <div className="w-[90%] grid grid-cols-12 gap-4 mt-[73px] h-auto m-auto">
      <div className="flex w-full h-[700px] justify-center items-center col-span-8 bg-gray-300 animate-blink"></div>
      <div className="col-span-4 flex flex-col gap-2 h-full mt-12">
        <div className="w-64 h-4 bg-gray-300 rounded-md animate-blink"></div>
        <div className="w-32 h-4 bg-gray-300 rounded-md animate-blink"></div>
        <div className="w-12 h-4 bg-gray-300 rounded-md animate-blink"></div>
        <hr />
        <div className="w-96 h-4 bg-gray-300 rounded-md animate-blink"></div>
        <span className="flex flex-row gap-2 items-center">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-gray-300 rounded-full mx-1 border-[0.1px] border-black/30 animate-blink"
            ></div>
          ))}
        </span>
        <div className="w-24 h-8 bg-gray-300 rounded-md animate-blink"></div>
      </div>
    </div>
  );
}
