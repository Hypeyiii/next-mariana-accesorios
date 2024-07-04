export function ProductsSkeleton() {
  return (
    <div className="w-[90%] m-auto items-center justify-center mt-12 grid grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
        <>
          <span className="flex flex-col gap-2 justify-start items-start col-span-2 md:col-span-1">
            <div
              key={i}
              className="bg-gray-300 animate-blink p-4 rounded-md shadow-md w-full h-[150px] md:h-[500px] hover:shadow-lg hover:shadow-black/50 transition-all animate-pulse"
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
    <div className="w-screen md_w-[90%] grid grid-cols-12 gap-4 mt-[61px] md:mt-[73px] h-auto m-auto">
      <div className="flex w-full h-[300px] md:h-[700px] justify-center items-center col-span-12 md:col-span-8 bg-gray-300 animate-blink"></div>
      <div className="col-span-12 md:col-span-4 flex flex-col p-4 md:p-0 gap-2 h-full mt-12">
        <div className="w-64 h-4 bg-gray-300 rounded-md animate-blink"></div>
        <div className="w-32 h-4 bg-gray-300 rounded-md animate-blink"></div>
        <div className="w-12 h-4 bg-gray-300 rounded-md animate-blink"></div>
        <hr />
        <div className="w-96 h-4 bg-gray-300 rounded-md animate-blink"></div>
        <span className="flex flex-row md:gap-2 items-center">
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

export function DashboardSkeleton() {
  return (
    <div className="h-full md:overflow-auto grid col-span-12 grid-cols-12 mt-12 text-black bg-white w-[82%] ml-auto">
      <div className="col-span-12 flex flex-col gap-2">
        <div className="w-12 h-8 bg-gray-300 rounded-md animate-blink"></div>
        <div className="w-32 h-8 bg-gray-300 rounded-md animate-blink"></div>
      </div>
      <span className="col-span-12 grid grid-cols-4 gap-2 items-center">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="w-[282px] h-40 bg-gray-300 rounded-md animate-blink"
          ></div>
        ))}
      </span>
      <div className="col-span-5 md:col-span-3 flex flex-col gap-2">
        <div className="col-span-5 text-white bg-gray-50 rounded-lg p-2 md:p-5">
          <table className="min-w-full bg-white p-5 rounded-lg">
            <thead>
              <tr className="text-black text-[8px] md:text-xs uppercase">
                <th className="py-4 px-4 border-b">Customer</th>
                <th className="py-4 px-4 border-b">Email</th>
                <th className="py-4 px-4 border-b">Role</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="py-4 px-4 flex items-center">
                    <div className="w-10 h-10 rounded-full mr-2 bg-gray-300 animate-blink"></div>
                    <div>
                      <div className="w-32 h-4 bg-gray-300 rounded-md animate-blink"></div>
                    </div>
                  </td>
                  <td className="text-[10px] py-4 px-4 text-black md:text-xs">
                    <div className="w-32 h-4 bg-gray-300 rounded-md animate-blink"></div>
                  </td>
                  <td className="text-[10px] py-4 px-4 text-black md:text-xs">
                    <div className="w-12 h-4 bg-gray-300 rounded-md animate-blink"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="col-span-12 md:col-span-9 flex flex-col gap-2">
        <div className="col-span-5 text-white bg-gray-50 rounded-lg p-2 md:p-5">
          <table className="min-w-full bg-white p-5 rounded-lg">
            <thead>
              <tr className="text-black text-[8px] md:text-xs uppercase">
                <th className="py-4 px-4 border-b">Product</th>
                <th className="py-4 px-4 border-b">Price</th>
                <th className="py-4 px-4 border-b">Stock</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="py-4 px-4 flex items-center">
                    <div className="w-10 h-10 rounded-full mr-2 bg-gray-300 animate-blink"></div>
                    <div>
                      <div className="w-32 h-4 bg-gray-300 rounded-md animate-blink"></div>
                    </div>
                  </td>
                  <td className="text-[10px] py-4 px-4 text-black md:text-xs">
                    <div className="w-32 h-4 bg-gray-300 rounded-md animate-blink"></div>
                  </td>
                  <td className="text-[10px] py-4 px-4 text-black md:text-xs">
                    <div className="w-12 h-4 bg-gray-300 rounded-md animate-blink"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}
