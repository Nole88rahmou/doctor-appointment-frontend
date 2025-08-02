"use client";

import React from "react";
import { useState, useEffect } from "react";
import Api from "../../../_utils/Api";
import Link from "next/link";
import Image from "next/image";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../../../components/ui/command";

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    Api.getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="h-screen  flex flex-col mt-5">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryList?.map((category, index) => {
              return (
                <CommandItem key={index}>
                  <Link
                    href={`/search/${category.name}`}
                    className="p-2flex gap-2 w-full hover:bg-lime-300 cursor-pointer"
                  >
                    <Image
                      src={`http://localhost:1337${category?.icon[0]?.url}`}
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                      alt={category.name}
                    />
                    <label className="cursor-pointer">{category?.name}</label>
                  </Link>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
