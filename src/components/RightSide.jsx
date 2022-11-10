export default function RightSide() {
  return (
    <div className="bg-slate-100 w-72 mt-20 h-4/5 flex justify-center px-7 rounded-r-2xl">
      <div className="bg-orange-500 h-44 mt-28 rounded-2xl w-full p-4 text-white text-center">
        <p className="text-sm">Your plan</p>
        <p className="font-bold text-2xl mt-2">Pro Annual</p>
        <p className="text-xs mt-2">Renews on Nov.2021</p>
        <button className="border border-white rounded-md h-8 mt-4">
          Cancel subscription
        </button>
      </div>
    </div>
  );
}
