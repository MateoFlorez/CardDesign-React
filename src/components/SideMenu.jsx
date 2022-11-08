import {
  TbLogout,
  TbLock,
  TbMail,
  TbCash,
  TbApps,
  TbBoxModel2,
} from "react-icons/tb";

export default function SideMenu() {
  return (
    <div className="bg-slate-400 w-64 h-4/5 rounded-l-2xl mt-10 flex justify-center text-gray-600 font-bold">
      {/* HEADER */}
      <div>
        <div className="px-4 py-10 flex">
          <div className="h-8 w-14">
            <img
              src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg"
              alt=""
              className="rounded-md mr-3"
            />
          </div>
          <div className="ml-4 items-center">
            <p className="font-bold text-black text-lg">Mateo Guisao</p>
            <p className="font-light">@MateoFlorez</p>
          </div>
        </div>
        <div className="px-4 mt-14">
          <ul>
            <a href="#general">
              <li className="flex hover:text-gray-800 hover:animate-pulse mb-3 hover:border-l-2 pl-2 hover:border-slate-900">
                <TbBoxModel2 size={24} color={"#4F4F4F"} className="mr-2"/>
                General
              </li>
            </a>
            <a href="#password">
              <li className="flex hover:text-gray-600 hover:animate-pulse mb-3 hover:border-l-2 pl-2 hover:border-slate-900">
                <TbLock size={24} color={"#4F4F4F"} className="mr-2"/>
                Password
              </li>
            </a>
            <a href="#invitations">
              <li className="flex hover:text-gray-600 hover:animate-pulse mb-3 hover:border-l-2 pl-2 hover:border-slate-900">
                <TbMail size={24} color={"#4F4F4F"} className="mr-2"/>
                Invitations
              </li>
            </a>
            <a href="#billing">
              <li className="flex hover:text-gray-600 hover:animate-pulse mb-3 hover:border-l-2 pl-2 hover:border-slate-900">
                <TbCash size={24} color={"#4F4F4F"} className="mr-2"/>
                Billing
              </li>
            </a>
            <a href="apps">
              <li className="flex hover:text-gray-600 hover:animate-pulse mb-3 hover:border-l-2 pl-2 hover:border-slate-900">
                <TbApps size={24} color={"#4F4F4F"} className="mr-2"/>
                Apps
              </li>
            </a>
          </ul>
        </div>
        <div className="mt-52 p-4">
          <a
            href="#logout"
            className="flex items-center hover:animate-pulse"
          >
            <TbLogout size={24} color={"#4F4F4F"} className="mr-1"/>
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
}
