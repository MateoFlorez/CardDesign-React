import {
  TbLogout,
  TbLock,
  TbMail,
  TbCash,
  TbApps,
  TbBoxModel2,
} from "react-icons/tb";
import { Link } from "react-router-dom";

export default function SideMenu() {
  // function activateInfoCard(e) {
  //   e.preventDefault();
  //   (`you clicked me`);
  // }

  return (
    <div className="bg-slate-300 w-72 h-4/5 rounded-l-2xl mt-20 flex justify-center text-gray-600 font-bold z-20">
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
            <li className="flex hover:text-gray-800 hover:animate-pulse mb-3 hover:border-l-2 pl-2 hover:border-slate-900">
              <TbBoxModel2 size={24} color={"#4F4F4F"} className="mr-2" />
              <Link to="/">General</Link>
            </li>

            <li className="flex hover:text-gray-600 hover:animate-pulse mb-3 hover:border-l-2 pl-2 hover:border-slate-900">
              <TbLock size={24} color={"#4F4F4F"} className="mr-2" />
              <Link to="/">Password</Link>
            </li>

            <li className="flex hover:text-gray-600 hover:animate-pulse mb-3 hover:border-l-2 pl-2 hover:border-slate-900">
              <TbMail size={24} color={"#4F4F4F"} className="mr-2" />
              <Link to="/">Invitations</Link>
            </li>

            <li className="flex hover:text-gray-600 hover:animate-pulse mb-3 hover:border-l-2 pl-2 hover:border-slate-900">
              <TbCash size={24} color={"#4F4F4F"} className="mr-2" />
              <Link to="/billing">Billing</Link>
            </li>

            <li className="flex hover:text-gray-600 hover:animate-pulse mb-3 hover:border-l-2 pl-2 hover:border-slate-900">
              <TbApps size={24} color={"#4F4F4F"} className="mr-2" />
              <Link to="/">Apps</Link>
            </li>
          </ul>
        </div>
        <div className="mt-52 p-4">
          <a href="#logout" className="flex items-center hover:animate-pulse">
            <TbLogout size={24} color={"#4F4F4F"} className="mr-1" />
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
}
