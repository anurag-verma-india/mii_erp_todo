
import React from "react";
import { Building, Globe, Users, User, Mail, Calendar } from "lucide-react";
import { useNavigate } from "react-router"

const ProgressBar = ({ received, total }) => {
  const percentage = Math.round((received / total) * 100);
  return (
    <>
      <div className="flex justify-between text-sm mt-2 pl-2">
        <p>
          ₹{received / 1000}K / ₹{total / 1000}K
        </p>
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">
          Pitching
        </span>
      </div>
      <div className="p-2">
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2 ">
          <div
            className="h-full bg-black rounded-full transition-all duration-700 ease-in-out "
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {
  const handleUpdateStatus = () => {
    console.log("Status submitted");
  };
  const navigate = useNavigate();
  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto font-sans">
      <div className="bg-[#FFFFFF] p-6 rounded-2xl shadow-md shadow-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold ">
              Welcome Back,<span className="underline"> User </span>
            </h2>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
              Incubated
            </span>
            <div className="flex items-center gap-3 mt-2">
              <div className="bg-gray-100 p-3 rounded-xl">
                {/* <svg
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M6 2a2 2 0 0 0-2 2v16h16V4a2 2 0 0 0-2-2H6zm0 2h12v4H6V4zm0 6h12v2H6v-2zm0 4h12v2H6v-2zm0 4h12v2H6v-2z" />
                </svg> */}
                <Building className="w-4 h-4 text-gray-600" />
              </div>
              <div>
                <p className="font-bold text-gray-800">User</p>
                <p className="text-sm text-gray-500">
                  AI & Machine Learning Solutions
                </p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-5 h-5 text-gray-500 mr-2" />
              Est. 2020
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <Globe className="w-5 h-5 mr-2" />
              <a href="#" className="text-black">
                www.tech.com
              </a>
            </div>

          </div>
          <div className="mt-6 p-2 md:mt-0 flex flex-col items-center gap-4 w-full md:w-auto">
            <button
              className="bg-[#D2E7C3] text-green-800 px-8 py-2 rounded-full shadow-sm  hover:bg-green-200"
              onClick={handleUpdateStatus}
            >
              Update Status
            </button>
            <div className="text-left">
              <p className="text-md font-medium text-gray-700">
                Startup Stats,
              </p>
              <div className="flex gap-2 mt-2 flex-wrap justify-center">
                <div className="flex-1 h-full min-w-[120px] bg-white border border-gray-200 shadow-md shadow-blue-600 rounded-xl px-4 py-2 text-sm text-center">
                  <p className="text-gray-500">Total Revenue</p>
                  <p className="font-bold">2.6M</p>
                </div>
                <div className="flex-1 min-w-[120px] bg-white border border-gray-200 shadow-md shadow-blue-600 rounded-xl px-4 py-2 text-sm text-center">
                  <p className="text-gray-500">Profile</p>
                  <p className="font-bold text-green-600">1.8M</p>
                </div>
                <div className="flex-1 min-w-[120px] bg-white border border-gray-200 shadow-md shadow-blue-600 rounded-xl px-4 py-2 text-sm text-center">
                  <p className="text-gray-500">Burn Rate</p>
                  <p className="font-bold text-red-500">300K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#F7F9FB] rounded-2xl shadow-md shadow-gray-600 p-4">
          <div className=" flex flex-col items-center bg-black text-white px-4 py-2 shadow-md rounded-xl font-medium">

            <span className="flex items-center">
              <User className="w-4 h-4 text-white pl-[1px]" />
              Mentor-Profile
            </span>
          </div>
          <div className="pt-6 ">
            <div className="bg-white rounded-2xl border-gray-300 shadow-md p-2 border-[1px]  w-full max-w-4xl mx-auto  ">
              <div className="flex flex-col md:flex-row justify-between items-start  mt-4 ">
                <div className="flex flex-row gap-2 flex-wrap">
                  <div className="flex-shrink-0">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Mentor"
                      className="w-15 h-15 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xl font-bold">Sarah Johnson</p>
                    <p className="text-gray-500 mb-2">Mentor</p>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-700 gap-2 mb-1">
                      <Mail className="w-4 h-4 text-gray-600" />
                      <span>sarah.j@techvision.com</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700 gap-2">
                      <Building className="w-4 h-4 text-gray-600" />
                      <span>Mobile: +91-9693284798</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border-[1px] border-gray-300 shadow-md shadow-gray-300  mr-2 pb-6 pt-4 mt-2 w-full md:w-[80%] ">
                  <div className="flex items-center text-sm text-gray-500 pl-2 ">
                    <Users className="text-gray-600  w-5 h-5 p-1" />
                    <p>Next Meeting: 06/07/26 @5am</p>
                  </div>
                  <div className="flex items-center  text-sm text-gray-500 pb-4 pl-2">
                    <Globe className="text-gray-600 w-5 h-5 p-1" />
                    <p>Agenda: Product Testing</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 border-t border-gray-200 pt-2">
                    <button className="hover:underline pl-2">
                      Schedule Meeting
                    </button>
                    <button className="hover:underline pr-2">
                      Meeting Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t mt-4 pt-3 flex justify-center border-gray-200 text-sm text-gray-600 px-2">
                <button className="hover:underline pr-12 pb-4 " onClick={() => {navigate("/startup/mentor_profile");
                }}>
                  View Details
                </button>
                <button className="hover:underline pl-12 pb-4  " onClick={() => {navigate("/startup/mentorship");
                }}>
                  Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F9FB] rounded-2xl shadow-md shadow-gray-600 p-4">
          <div className=" flex flex-col items-center bg-black text-white px-4 py-2 shadow-md rounded-xl font-medium">
            Investment Status
          </div>
          <div className="mt-4 space-y-4">
            <div className=" border-[1px] border-gray-300 rounded-xl p-2">
              <div className="bg-white rounded-xl pb-4">
                <p className="text-sm font-medium pt-2 pl-2">Funds Received</p>
                {/* data input */}
                <ProgressBar received={400000} total={500000} />
              </div>
              <div className="pt-4">
                <div className="bg-white rounded-xl p-2">
                  <p className="text-sm font-medium">Next Funding</p>
                  <p className="text-sm text-gray-600">
                    Scheduled on 10 May 2025
                  </p>
                  <div className="flex justify-end space-x-8 text-blue-600 text-sm pt-4">
                    <button className="text-gray-700 cursor-pointer underline" onClick={() => {navigate("/startup/finances");
                }}>
                      View Details
                    </button>
                    <button className="text-gray-700 cursor-pointer underline">
                      Request Funding
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 md:p-4 space-y-6 max-w-7xl mx-auto font-sans">
        <div className="bg-[#F7F9FB] border-2 border-gray-200 rounded-2xl  p-4">
          <div className="flex justify-between items-start flex-wrap">
            <div>
              <div className="flex items-center gap-2 font-medium">
                <Users className="text-black  w-5 h-5" />
                <span className="text-xl bg-gray-100 p-2 rounded-full"></span>
                <p>Resources Allocated</p>
              </div>
              <div className="flex gap-8 mt-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">Printers</p>
                  <p className="text-sm text-gray-600">3 in use</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Desks</p>
                  <p className="text-sm text-gray-600">5 in use</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Computers</p>
                  <p className="text-sm text-gray-600">5 in use</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2 font-medium" >
                <p>Request Status</p>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  Pending
                </span>
              </div>
              <div className="flex  gap-2 mt-2">
                <button className="bg-white px-3 py-1 rounded text-sm cursor-pointer">
                  View Request
                </button>
                <button className="bg-white px-3 py-1 rounded text-sm cursor-pointer" onClick={() => {navigate("/startup/popups/request_resource_popup");
                }}>
                  Request Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
