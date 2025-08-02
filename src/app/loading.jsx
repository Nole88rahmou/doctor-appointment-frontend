import React from "react";

function loading() {
  return (
    <div className="h-screen p-6 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl animate-pulse">
        {/* Skeleton de l'image */}
        <div className="bg-gray-200 h-[200px] rounded-lg w-full" />

        {/* Skeleton des infos du docteur */}
        <div className="col-span-2 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    </div>
  );
}

export default loading;
