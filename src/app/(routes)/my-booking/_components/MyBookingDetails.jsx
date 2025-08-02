import React from "react";
import Image from "next/image";
import CancelAppointment from "./CancelAppointment";
import Api from "../../../_utils/Api";
import { toast } from "sonner";

function MyBookingDetails({ bookingList, past, updateAppointment }) {
  const onDeleteBooking = (item) => {
    Api.deleteBooking(item).then((resp) => {
      console.log(resp);
      if (resp) {
        toast("Appointment Has Been Canceled !!");
        updateAppointment();
      }
    });
  };
  return (
    <div>
      {bookingList.map((item, index) => (
        <div>
          <div key={index} className="flex gap-2 items-center">
            <Image
              src={`http://localhost:1337${item?.doctor?.image[0]?.url}`}
              width={120}
              height={120}
              alt="image"
              className="rounded-full object-cover w-[70] h-[70]"
            ></Image>
            <div className="flex flex-col gap-2 mt-15 w-full">
              <h2 className="font-bold flex justify-between items-center">
                {item?.doctor?.name}
                {!past && (
                  <CancelAppointment
                    cancelClick={() => onDeleteBooking(item.documentId)}
                  />
                )}
              </h2>
              <h2>Address: {item?.doctor?.address}</h2>
              <h2>Phone: {item?.doctor?.phone}</h2>
              <h2>Date: {new Date(item.date).toLocaleString().slice(0, 10)}</h2>
              <h2>Time: {item.time}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyBookingDetails;
