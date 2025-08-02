"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../../../src/components/ui/input";
import { Button } from "../../../src/components/ui/button";
import Api from "../_utils/Api";
import Image from "next/image";
import Link from "next/link";

export default function CategorySearch() {
  const [categoryList, setGategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    Api.getCategory().then((resp) => {
      setGategoryList(resp.data.data);
    });
  };

  const categoryDiv = categoryList.map((cat, index) => {
    return (
      <div key={index}>
        <Link
          href={`/search/${cat.name}`}
          style={{ width: "200px", height: "150px" }}
          className="flex flex-col text-center items-center p-5 bg-lime-200 m-2 rounded-lg transition-transform duration-500 transform hover:rotate-3 hover:scale-105 hover:shadow-2xl hover:bg-lime-500 cursor-pointer"
        >
          <Image
            src={`http://localhost:1337${cat?.icon[0]?.url}`}
            alt="category-image"
            style={{ width: "150", height: "100" }}
            width={100}
            height={100}
          />
          <label className="font-bold">{cat?.name}</label>
        </Link>
      </div>
    );
  });

  return (
    <div className="mb-10 items-center flex flex-col">
      <h2 className="font-bold text-4xl mb-7">
        {" "}
        <span className="text-lime-600">Search</span> Categories
      </h2>
      <div className="flex w-full max-w-sm items-center">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-8 gap-1">
        {categoryDiv}
      </div>
    </div>
  );
}
