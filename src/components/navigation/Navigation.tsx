"use client";
import { useState } from "react";
import { Navbar } from "./navbar/Navbar";
import { Sidebar } from "./sidebar/Sidebar";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      <Navbar toggle={() => setIsOpen(!isOpen)} />
    </>
  );
};
