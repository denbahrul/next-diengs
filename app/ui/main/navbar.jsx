"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div class="bg-white p-auto m-auto flex flex-col">
        <div class="no-scrollbar flex overflow-x-scroll pb-10">
          <div class="ml-10 flex flex-nowrap md:ml-20 lg:ml-40">
            <div class="inline-block px-3">
              <div class="bg-white h-64 w-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"></div>
            </div>
            <div class="inline-block px-3">
              <div class="bg-white h-64 w-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"></div>
            </div>
            <div class="inline-block px-3">
              <div class="bg-white h-64 w-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"></div>
            </div>
            <div class="inline-block px-3">
              <div class="bg-white h-64 w-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"></div>
            </div>
            <div class="inline-block px-3">
              <div class="bg-white h-64 w-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"></div>
            </div>
            <div class="inline-block px-3">
              <div class="bg-white h-64 w-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"></div>
            </div>
            <div class="inline-block px-3">
              <div class="bg-white h-64 w-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
