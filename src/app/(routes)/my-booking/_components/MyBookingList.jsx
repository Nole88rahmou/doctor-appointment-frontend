"use client";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../@/components/ui/tabs";
import MyBookingDetails from "./MyBookingDetails";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Api from "../../../_utils/Api";

function MyBookingList() {
  const { user } = useKindeBrowserClient();

  const [bookingList, setbookingList] = useState([]);

  useEffect(() => {
    user && userBookingList();
  }, [user]);

  const userBookingList = () =>
    Api.myBookingList(user?.email).then((resp) => {
      console.log(resp.data.data);
      setbookingList(resp.data.data);
    });

  const filterBookingList = (type) => {
    const result = bookingList.filter((item) =>
      type == "upcoming"
        ? (item) => new Date(item.date) > new Date()
        : new Date(item.date) < new Date()
    );
    return result;
  };

  return (
    <div className="px-4 md:px-10">
      <h2 className="font-bold text-2xl my-5">My Booking</h2>
      <Tabs defaultValue="account" className="w-full m-t-8">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="UpComing">UpComing</TabsTrigger>
          <TabsTrigger value="Past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="UpComing">
          <MyBookingDetails
            updateAppointment={() => {
              userBookingList();
            }}
            past={false}
            bookingList={filterBookingList("upcoming")}
          />
        </TabsContent>
        <TabsContent value="Past">
          <MyBookingDetails
            past={true}
            bookingList={filterBookingList("past")}
            updateAppointment={() => {
              userBookingList();
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBookingList;
