import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { PiWarningCircle } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

function Groups() {
  let [isSearching, setIsSearching] = useState(false);
  return (
    <div className="container ms-3">
      <div className="input-group mb-3 ">
        <span className="input-group-text border-0 border-bottom border-secondary rounded-0 bg-white">
          <IoLocationOutline />
        </span>
        <input
          type="text"
          className="form-control border-0 border-bottom border-secondary"
          placeholder="Enter your location"
          aria-label="Amount (to the nearest dollar)"
          style={{ outline: "none", boxShadow: "none" }}
          onFocus={() => setIsSearching(true)}
        />
        <span
          onClick={() => setIsSearching(!isSearching)}
          className="input-group-text border-0 border-bottom border-secondary rounded-0 bg-white"
        >
          {isSearching ? <RxCross2 /> : <MdEdit />}
        </span>
      </div>
      <div className="d-flex">
        <PiWarningCircle className="fs-4 me-1" />
        <p className="text-muted " style={{ fontSize: "0.8rem" }}>
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </div>
  );
}

export default Groups;
