"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { Calendar } from "../../../components/ui/calendar";
import { Button } from "../../../components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Api from "../../../app/_utils/Api";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { redirect } from "next/navigation";

function BookAppointment({ doctor }) {
  const [date, setDate] = useState(new Date());

  const [timeSlot, setTimeSlot] = useState();

  const [selectedTime, setSelectedTime] = useState();

  const { user, isAuthenticated } = useKindeBrowserClient();
  // if (!isAuthenticated) {
  //   redirect("/api/auth/login");
  // }
  const pastDay = (day) => {
    return day < new Date();
  };

  const booking = () => {
    const data = {
      data: {
        userName: user.given_name + " " + user.family_name,
        email: user.email,
        date: date,
        time: selectedTime,
        doctor: doctor.documentId,
      },
    };

    Api.bookAppointment(data).then((resp) => {
      if (resp) {
        toast("Appointment Booked Successfully.");
      } else {
        console.log("response was filled !!");
      }
    });
  };

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00AM",
      });
      timeList.push({
        time: i + ":30AM",
      });
    }
    for (let i = 1; i <= 5; i++) {
      timeList.push({
        time: i + ":00PM",
      });
      timeList.push({
        time: i + ":30PM",
      });
    }

    setTimeSlot(timeList);
  };

  return (
    <Dialog>
      <DialogTrigger
        onClick={() => {
          if (!isAuthenticated) redirect("/api/auth/login");
        }}
        className=" text-white bg-lime-600 w-fit px-3 py-2 rounded-full"
      >
        Book Appointment
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-lg border"
                  disabled={pastDay}
                />
              </div>

              <div className="mt-5 md:mt-0">
                <div className="grid grid-cols-3 gap-3 border border-lg p-3">
                  {timeSlot?.map((item, index) => {
                    return (
                      <h2
                        onClick={() => setSelectedTime(item.time)}
                        className={`text-center hover:bg-lime-300 hover:text-lime-800 cursor-pointer border p-2 rounded-full transition-all duration-300 ease-in-out ${
                          item.time == selectedTime && "bg-lime-300"
                        }`}
                      >
                        {item.time}
                      </h2>
                    );
                  })}
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <Button onClick={booking} disabled={!date || !selectedTime}>
          Book Appointment
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default BookAppointment;
