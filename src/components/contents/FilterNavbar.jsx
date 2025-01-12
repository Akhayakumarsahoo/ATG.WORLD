import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";
import { IoMdExit } from "react-icons/io";

function FilterNavbar() {
  const filters = ["All Posts(32)", "Article", "Event", "Education", "Job"];
  const [activeFilter, setActiveFilter] = useState("All Posts(32)");
  const [isGrouped, setIsGrouped] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg py-2 border-lg-bottom border-2 sticky-sm-top bg-white">
      <div className="container-fluid">
        <a className="navbar-brand d-lg-none fs-6 fw-medium" href="#">
          {activeFilter}
        </a>
        <button
          className="navbar-toggler bg-body-secondary border border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fs-6">Filter: All {<IoMdArrowDropdown />}</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {filters.map((filter, idx) => (
              <a
                key={idx}
                className={`nav-link fs-6 ${
                  activeFilter === filter
                    ? `active fw-medium border-bottom border-dark border-2`
                    : ``
                }`}
                aria-current="page"
                href="#"
                // onClick={() => {
                //   setActiveFilter({ filter });
                // }}
              >
                {filter}
              </a>
            ))}
          </div>
        </div>
        <div className="d-none d-lg-block">
          <button className="btn bg-body-secondary me-4">
            Write a Post {<IoMdArrowDropdown />}
          </button>
          {isGrouped ? (
            <button
              className="btn bg-body-secondary"
              onClick={() => setIsGrouped(false)}
            >
              <IoMdExit /> Leave Group
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => setIsGrouped(true)}
            >
              <MdGroupAdd /> Join Group
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default FilterNavbar;
