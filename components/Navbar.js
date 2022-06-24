import React from "react";
import Button from "./Button";

export default function Navbar() {
  return (
    <div
      className="w-screen py-4 bg-blue-900 flex justify-center items-center fixed top-0 left-0 z-50 sm:h-fit h-[100px]"
      style={{
        boxShadow: "inset 0px 1px 100px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(80px)",
      }}
    >
      <div
        className={`w-11/12 max-w-[2560px] relative flex justify-between items-center select-none`}
      >
        <div className={`text-blue-100 font-lexend font-medium text-xl`}>
          <h4>STR HACKATON</h4>
        </div>
        <div>
          <Button>
            <span className="flex justify-center items-center font-inter">
              <img className="mr-2" src={`/assets/metamask.svg`} alt="" />{" "}
              Connect Wallet
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

