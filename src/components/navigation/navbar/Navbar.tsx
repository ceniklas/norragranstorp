import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./Button";

export const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-[#405950] sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link
              href="/"
              style={{
                display: "block",
                textTransform: "uppercase",
              }}
              className="font-mono font-bold"
            >
              Norra Granstorps vägförening
            </Link>
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-white ">
              <li>
                <Link href="/stadgar">
                  <p>Stadgar</p>
                </Link>
              </li>
              <li>
                <Link href="/styrelsen">
                  <p>Styrelsen</p>
                </Link>
              </li>
              <li>
                <Link href="/arsmoten">
                  <p>Årsmöten</p>
                </Link>
              </li>
              <li>
                <Link href="/motion">
                  <p>Motion</p>
                </Link>
              </li>
              <li>
                <Link href="/medlemsavgift">
                  <p>medlemsavgift</p>
                </Link>
              </li>
              <li>
                <Link href="/gdpr">
                  <p>gdpr</p>
                </Link>
              </li>
              <li>
                <Link href="/vara-vagar">
                  <p>Våra Vägar</p>
                </Link>
              </li>
              <li>
                <Link href="/kartor">
                  <p>Kartor</p>
                </Link>
              </li>
              <li>
                <Link href="/vatten-och-avlopp">
                  <p>Vatten & Avlopp</p>
                </Link>
              </li>
              <li>
                <Link href="/fiske">
                  <p>Fiske</p>
                </Link>
              </li>
              <li>
                <Link href="/eldning">
                  <p>Eldning</p>
                </Link>
              </li>
              <li>
                <Link href="/avfall">
                  <p>Avfall</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
