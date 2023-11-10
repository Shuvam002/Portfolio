import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span className="rounded-full bg-black text-white p-6 text-xl font-bold md:p-4 md:font-semibold">SS</span>
        <p className="text-slate-600 sticky bg-transparent px-10 flex">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
