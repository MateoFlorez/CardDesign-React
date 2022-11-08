export default function InfoCard() {
  return (
    <div className="bg-slate-300 w-5/12 mt-10 h-4/5 flex-col justify-center px-11">
      <div>
        <div className="pt-11 pb-11">
          <h1 className="font-bold text-4xl">Billing</h1>
        </div>
      </div>
      <div>
        <div>
          <p className="font-bold">Order History</p>
          <p className="text-sm text-gray-600">
            Manage billing information and view receips
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-3 justify-center">
          <h1 className="text-gray-600 text-sm">Date</h1>
          <h1 className="text-gray-600 text-sm">Type</h1>
          <h1 className="text-gray-600 text-sm">Receipt</h1>
        </div>
      </div>
      <div className="px-1 rounded-lg h-10 grid items-center transition ease-in-out delay-150 hover:bg-slate-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg duration-300">
        <div className="grid grid-cols-3 justify-center items-center">
          <p>Oct.21, 2021</p>
          <p>Pro Annual</p>
          <button className="w-24 border border-slate-400 rounded-md h-8 hover:border-black">
            Download
          </button>
        </div>
      </div>
      <div className="px-1 rounded-lg h-10 grid items-center transition ease-in-out delay-150 hover:bg-slate-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg duration-300">
        <div className="grid grid-cols-3 justify-center items-center">
          <p>Aug.21, 2021</p>
          <p>Pro Portfolio</p>
          <button className="w-24 border border-slate-400 rounded-md h-8 hover:border-black">
            Download
          </button>
        </div>
      </div>
      <div className="px-1 rounded-lg h-10 grid items-center transition ease-in-out delay-150 hover:bg-slate-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg duration-300">
        <div className="grid grid-cols-3 justify-center items-center">
          <p>July.21, 2021</p>
          <p>Sponsored Post</p>
          <button className="w-24 border border-slate-400 rounded-md h-8 hover:border-black">
            Download
          </button>
        </div>
      </div>
      <div className="px-1 rounded-lg h-10 grid items-center transition ease-in-out delay-150 hover:bg-slate-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg duration-300">
        <div className="grid grid-cols-3 justify-center items-center">
          <p>Jun.21, 2021</p>
          <p>Sponsored Post</p>
          <button className="w-24 border border-slate-400 rounded-md h-8 hover:border-black">
            Download
          </button>
        </div>
      </div>
      <div className="mt-2">
        <div>
          <p className="text-orange-600 underline font-semibold cursor-pointer">
            Load more
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <p className="font-bold">Payment Method</p>
          <p className="text-sm text-gray-600">
            Manage billing information and view receips
          </p>
        </div>
        <div className="rounded-sm mt-6 grid grid-cols-3 items-center">
          <div className="col-span-2 flex items-center">
            <img
              src="https://1000marcas.net/wp-content/uploads/2019/12/Visa-logo.jpg"
              alt=""
              className="rounded-md w-20 h-10"
            />
            <p className="font-semibold ml-2">Visa ending in 2255</p>
          </div>
          <div>
            <button className="w-24 border border-slate-400 rounded-md h-8 transition ease-in-out duration-700 hover:border-black">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
