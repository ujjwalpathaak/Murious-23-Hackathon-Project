import React from "react";
import { selectUser } from "../providers/userSlice";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router";
const StudentDashboard = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div className="flex h-[100vh] w-[100%] bg-black">
      {/* <div className="bg-[#FFFFFF] w-64">side pannel</div> */}
      <div className="h-[100vh] w-full">
        <div className="bg-[#F1F3F4] h-[10vh] w-full flex  flex-wrap items-center justify-start">
          {/* <h1 className="ml-20 font-bold text-2xl">Dashboard</h1> */}
          <h1 className="ml-20 font-bold text-2xl">Welcome, {user.Name}</h1>
        </div>
        <div className="bg-[#FFFFFF] h-[90vh] w-full flex justify-center ">
          <div className="m-8   w-full flex flex-col justify-center">
            <div className="w-full h-[50%]  flex justify-center items-center gap-x-6">
              {/* Past record */}
              <div
                style={{
                  backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/04/78/21/44/1000_F_478214482_Ke4Go9H7n899XYqPtnNIOZXdfhthnxlX.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[30%] transform  hover:bg-blue-600 transition duration-500 hover:scale-105 point cursor-pointer flex justify-center items-center h-[80%] rounded-xl"
              >
                <div
                  onClick={() => navigate("/videoCall")}
                  class="opacity-0 hover:opacity-100 hover:bg-black/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-xl"
                >
                  Call Doctor
                </div>
              </div>
              {/* video call */}
              <div
                style={{
                  backgroundImage: `url(https://media.istockphoto.com/id/1139096151/vector/patient-paper-medical-record-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=EpiseziE5_qy5z9bg9vNrl2VXveGwr3KCM-LKAq4DQs=)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[30%] emr-data_v03  transform bg-blue-400 hover:bg-blue-600 transition duration-500 hover:scale-105 point cursor-pointer flex justify-center items-center h-[80%] rounded-xl"
              >
                <div onClick={() => navigate("/medicalCard")} class="opacity-0 hover:opacity-100 hover:bg-black/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-xl">
                  Medical Card
                </div>
              </div>
              {/* Medicine card */}
              <div
                style={{
                  backgroundImage: `url(https://thumbs.dreamstime.com/b/d-isometric-flat-vector-concept-online-pharmacy-store-medicine-ordering-mobile-app-d-isometric-flat-vector-concept-online-183269248.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[30%] transform  bg-blue-400 hover:bg-blue-600 transition duration-500 hover:scale-105 point cursor-pointer flex justify-center items-center h-[80%] rounded-xl"
              >
                <div class="opacity-0 hover:opacity-100 hover:bg-black/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-xl">
                  Order Medicines
                </div>
              </div>
            </div>
            <div className="w-full h-[50%] flex justify-center items-center gap-x-6">
              {/* Past record */}
              <div className="w-[30%] transform bg-blue-400 hover:bg-blue-600 transition duration-500 hover:scale-105 point cursor-pointer flex justify-center items-center h-[80%] rounded-xl bg-slate-400">
                <div class="opacity-0 hover:opacity-100 hover:bg-black/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-xl">
                  Past Records
                </div>
              </div>
              {/* video call */}
              <div className="w-[30%] transform bg-blue-400 hover:bg-blue-600 transition duration-500 hover:scale-105 point cursor-pointer flex justify-center items-center h-[80%] rounded-xl bg-slate-500">
                <div class="opacity-0 hover:opacity-100 hover:bg-black/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-xl">
                  Past Records
                </div>
              </div>
              {/* Medicine card */}
              <div className="w-[30%]  transform bg-blue-400 hover:bg-blue-600 transition duration-500 hover:scale-105 point cursor-pointer flex justify-center items-center h-[80%] rounded-xl bg-slate-600">
                <div class="opacity-0 hover:opacity-100 hover:bg-black/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-xl">
                  Past Records
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
