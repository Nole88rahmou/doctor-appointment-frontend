import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorList({
  doctorList,
  heading = "Popular Doctors",
}) {
  //   const imagurl = doctorList.map((doctor) => {
  //     console.log(doctor.image[0].url);
  //   });

  return (
    <div>
      <h2 className="my-2 font-bold text-4xl text-lime-600 text-center ">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {doctorList?.map((doctor, index) => {
          return (
            <Link key={index} href={`/details/${doctor?.documentId}`}>
              <div className="border-[1px] p-3 rounded-lg m-3">
                <Image
                  src={`http://localhost:1337${doctor?.image[0]?.url}`}
                  alt="doctor-image"
                  width={500}
                  height={500}
                  className="h-[500px] w-full object-cover"
                />
                <div className="items-baseline flex flex-col">
                  <h2 className="text-lime-600 mt-3 bg-lime-200 rounded-full p-2">
                    {doctor?.category?.name}
                  </h2>
                  <h2 className="mt-2">
                    <span className="text-lime-600">Name: </span>
                    {doctor?.name}
                  </h2>
                  <h2 className="mt-2">
                    <span className="text-lime-600">Year Of Experience: </span>
                    {doctor?.year_of_experience}
                  </h2>
                  <h2 className="mt-2">
                    <span className="text-lime-600">Address: </span>
                    {doctor?.address}
                  </h2>
                  <h2 className="mt-2">
                    <span className="text-lime-600">Phone: </span>
                    {doctor?.phone}
                  </h2>
                  <h2 className="border-[1px] p-3 border-lime-600 mt-5 hover:bg-lime-300 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300">
                    Book Now
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
