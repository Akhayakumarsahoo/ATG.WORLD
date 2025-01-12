import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import Signup from "../auth/Signup";

function MainNavbar() {
  return (
    <>
      {/* Logo */}
      <nav className="navbar container-fluid navbar-light bg-white border border-bottom d-none d-lg-block sticky-top">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src="logo.svg" alt="ATG.WORLD" />
          </a>

          {/* Search bar */}
          <div
            className="input-group input-group rounded-pill me-3"
            style={{ maxWidth: "350px" }}
          >
            <span
              className="input-group-text bg-body-secondary rounded-start-pill border border-0"
              id="basic-addon1"
            >
              <IoSearchSharp />
            </span>
            <input
              type="text"
              className="form-control rounded-end-pill border border-0 bg-body-secondary"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
              aria-describedby="basic-addon1"
              style={{ outline: "none", boxShadow: "none" }}
            />
          </div>

          {/* Create Account Button */}
          <div>
            <button
              className="btn btn-link text-secondary fw-semibold text-decoration-none"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Create account.{" "}
              <span className="text-primary fw-bold">It’s free!</span>
              <IoMdArrowDropdown />
            </button>
          </div>
          {/* <Signup /> */}
        </div>
      </nav>
    </>
  );
}

export default MainNavbar;
