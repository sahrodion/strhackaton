import React from "react";

export default function SelectCrypto({ style, style2, src, tokenName, token, btc, stx, link }) {
  return (
    <div className={`rounded-3xl w-[500px]`}>
      <div
        className={`flex flex-col justify-center items-center p-16 rounded-t-xl`}
        style={style}
      >
        <div className={`bg-black rounded-full p-[1px]`}>
          <img src={src} alt="btc logo" />
        </div>
        <div
          className={`text-white text-xl font-bold font-lexend flex justify-center items-center`}
        >
          <h4>{tokenName}</h4>
          <div
            className="p-[3px] px-2 rounded-lg font-normal text-xs ml-3"
            style={style2}
          >
            {token}
          </div>
        </div>
      </div>
      <div
        className={`bg-blue-700 flex justify-center items-center py-4 rounded-b-xl font-inter`}
      >
        <div className={` flex flex-col justify-center items-center`}>
          <h4
            className={`text-sm text-center ${
              btc ? "text-brown-100" : "text-white"
            }
             ${stx ? "text-violet-100" : "text-white"}
              ${link ? "text-blue-200" : "text-white"}`}
          >
            Market Price
          </h4>
          <h4 className={`text-white text-xl`}>$21,093</h4>
        </div>
        <div className={` flex flex-col justify-center items-center mx-16`}>
          <h4
            className={`text-sm text-center ${
              btc ? "text-brown-100" : "text-white"
            }
             ${stx ? "text-violet-100" : "text-white"}
              ${link ? "text-blue-200" : "text-white"}`}
          >
            APR Fee
          </h4>
          <h4 className={`text-white text-xl`}>10%</h4>
        </div>
        <div className={` flex flex-col justify-center items-center`}>
          <h4
            className={`text-sm text-center ${
              btc ? "text-brown-100" : "text-white"
            }
             ${stx ? "text-violet-100" : "text-white"}
              ${link ? "text-blue-200" : "text-white"}`}
          >
            TVL
          </h4>
          <h4 className={`text-white text-xl`}>$379M</h4>
        </div>
      </div>
    </div>
  );
}
