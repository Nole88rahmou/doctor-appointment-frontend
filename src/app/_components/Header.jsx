"use client";

import { Button } from "../../components/ui/button";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../src/components/ui/popover";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

export default function Header() {
  const { user } = useKindeBrowserClient();
  useEffect(() => {}, [user]);

  const Menu = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 2,
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const navigationJsx = Menu.map((item) => {
    return (
      <Link key={item.id} href={item.path}>
        <li className="hover:text-lime-700 hover:scale-105 transition-all cursor-pointer">
          {item.name}
        </li>
      </Link>
    );
  });

  return (
    <div className="flex items-center justify-between p-3 shadow-sm">
      <div className="flex items-center gap-10">
        <Image
          src="/assets/images/logo.png"
          width={100}
          height={100}
          alt="logo-img"
          priority
        />
        <ul className="md:flex gap-8 sm: hidden">{navigationJsx}</ul>
      </div>
      {user ? (
        <Popover>
          <PopoverTrigger>
            {" "}
            <Image
              src={user.picture}
              width={50}
              height={50}
              alt={user.family_name}
              className="rounded-full"
            />
          </PopoverTrigger>
          <PopoverContent className="w-45 flex flex-col">
            <ul>
              <li className="mt-2 font-bold cursor-pointer hover:bg-lime-300 p-2">
                My Profil
              </li>
              <Link
                href="/my-booking"
                className="mt-2 font-bold cursor-pointer hover:bg-lime-300 p-2"
              >
                My Booking
              </Link>
              <li className="mt-2 font-bold cursor-pointer hover:bg-lime-300 p-2">
                {" "}
                <LogoutLink>Log out</LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
}
