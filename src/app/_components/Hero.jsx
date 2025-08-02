import React from "react";
import { Button } from "../../components/ui/button";

function Hero() {
  return (
    <section>
      <div className="  mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div className="md:col-span-1">
            <div className=" max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-lime-600 sm:text-3xl">
                Your Health Just, Just a Click Away.
              </h2>

              <p className="mt-4 text-gray-700">
                Search, compare, and book appointments with top doctors anytime,
                anywhere. Accees quality healthcare from the comfort of your
                home.
              </p>
              <Button className="mt-5">Explore Now</Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <img
              src="/assets/images/hero.png"
              className="rounded"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
