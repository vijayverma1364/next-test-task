"use client";

import React, { useState } from "react";
import PostModal from "../modal";

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="main-container">
      <div>
        <button
          className="border border-solid border-[#EE2E12] bg-transparent px-12 py-4 rounded-[50px] text-base text-[#EE2E12] bg-[#ffeaea]"
          onClick={handleOpen}
        >
          Edit Profile
        </button>
      </div>
      <div>{open && <PostModal open={open} setOpen={setOpen} />}</div>
    </div>
  );
};

export default MainPage;
