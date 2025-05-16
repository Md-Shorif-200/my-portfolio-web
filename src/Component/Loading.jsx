import React from "react";

const Loading = () => {
  return (
     <div className="fixed inset-0 z-50 flex flex-col gap-y-10 items-center justify-center bg-white/70 backdrop-blur-sm">
    <div className="w-16 h-16 border-4 border-t-[#F05454] border-gray-300 rounded-full animate-spin"></div>
       <div>
          <p>Loading.......please wait</p>
       </div>
  </div>
  );
};

export default Loading;
