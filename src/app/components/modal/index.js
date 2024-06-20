"use client";

import * as React from "react";
import Image from "next/image";
import { mediaData } from "./data.json";
import { useEffect } from "react";

export default function PostModal({ open, setOpen }) {
  const modalRef = React.useRef(null);

  const handleClose = () => setOpen(false);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`modal-wrapper overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          open ? "block" : "hidden"
        }`}
      >
        <div
          ref={modalRef}
          className="flex-column absolute top-[50%] left-[50%] w-full max-w-[944px] bg-white p-[30px] text-black rounded-[20px] modal-conatiner"
        >
          <div className="flex w-full">
            <div className="flex w-full gap-5 mb-9 flex-wrap">
              <Image
                src="/user-profile.svg"
                alt="user profile Logo"
                width={100}
                height={24}
                priority
                className="rounded-[50%] w-[60px] h-[60px] text-[#404040]"
              />
              <div className="flex-column">
                <p className="font-bold text-2xl">Forrest Skerman-Stevenson</p>
                <p className="text-xl font-medium">Posting to Merazonia</p>
              </div>
            </div>

            <div className="close-icon bg-white w-10 h-10 rounded-[40px] flex justify-center items-center">
              <Image
                onClick={handleClose}
                src="/close-icon.svg"
                alt="close icon"
                width={36}
                height={36}
                priority
                className="cursor-pointer"
              />
            </div>
          </div>

          <textarea
            rows="4"
            name="comment"
            id="comment"
            class="w-full min-h-[150px] border-b border-[#D7D7D7] text-[#8F8F90] text-xl font-medium focus-visible:border focus-visible:outline-none focus:border-[#D7D7D7]  focus-visible:p-5"
            placeholder=" What do you want to talk about?"
          ></textarea>

          <div className="flex justify-between mt-[30px] items-center flex-wrap gap-[10px]">
            <div className="flex gap-[15px] flex-wrap">
              {mediaData?.length &&
                mediaData?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-[#F4F4F5] px-3 py-4 text-center rounded-[10px] min-w-[100px] min-h-[80px]"
                    >
                      <Image
                        src={item?.icon}
                        alt="close icon"
                        width={25}
                        height={25}
                        priority
                        className="m-auto"
                      />
                      <p className="mt-1 text-[#404040] text-base font-semibold">
                        {item?.title}
                      </p>
                    </div>
                  );
                })}
            </div>

            <div>
              <button className="bg-[#EE2E12] px-12 py-4 rounded-[50px] opacity-[38%] text-base text-white flex items-center">
                <Image
                  src="/send.svg"
                  alt="close icon"
                  width={18}
                  height={18}
                  priority
                  className="mr-4"
                />
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
