import { useState } from "react";
import { MdGroupAdd } from "react-icons/md";
import { IoMdExit } from "react-icons/io";

const Hero = () => {
  const [isGrouped, setIsGrouped] = useState(false);

  return (
    <div className="hero row d-flex align-items-end position-relative">
      {/* Join Group Button */}
      <button
        className="d-lg-none btn bg-transparent border border-2 border-white text-white position-absolute"
        style={{ top: "20px", right: "30px", width: "fit-content" }}
        onClick={() => setIsGrouped(!isGrouped)}
      >
        {isGrouped ? <IoMdExit /> : <MdGroupAdd />}{" "}
        {isGrouped ? "Leave Group" : "Join Group"}
      </button>

      {/* Content */}
      <div className="offset-1 offset-md-2 pb-5">
        <h1 className="text-white fs-sm-3 fw-bold text-md-start">
          Computer Engineering
        </h1>
        <p className="text-white fs-6 fs-md-5 text-md-start">
          142,765 Computer Engineers follow this
        </p>
      </div>
    </div>
  );
};

export default Hero;
