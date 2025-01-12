import { IoEyeOutline } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { PiBagSimple } from "react-icons/pi";

function Posts() {
  return (
    <div className="container p-0">
      <div className="card mb-2 px-2">
        <img
          src="jungle.jpeg"
          className="card-img-top object-fit-cover"
          style={{ height: "220px" }}
          alt="jungle"
        />
        <div className="card-body">
          <h5 className="card-title">✍ Article</h5>
          <div className="d-flex justify-content-between align-items-baseline">
            <h5 className="card-title">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </h5>
            <span className="fs-4 ms-1">
              <div className="dropstart">
                <button
                  className="border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDots />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <p className="card-text">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <img
              className="rounded-pill"
              src="person1.jpeg"
              alt="person1"
              style={{ height: "50px", width: "50px" }}
            />
            <div className="w-100 d-flex ps-3 flex-column flex-lg-row justify-content-lg-between">
              <span className="fs-5 fw-semibold">Sarthak Kamra</span>
              <span className="ps-lg-5">{<IoEyeOutline />} 1.4k views</span>
            </div>
            <button
              className="ms-5 d-flex align-items-center justify-content-center fs-4 border-0 rounded"
              style={{
                outline: "none",
                boxShadow: "none",
                height: "40px",
                width: "100px",
              }}
            >
              {<IoShareSocialSharp />}
            </button>
          </div>
        </div>
      </div>
      <div className="card mb-2 px-2">
        <img
          src="window.jpeg"
          className="card-img-top object-fit-cover"
          style={{ height: "220px" }}
          alt="jungle"
        />
        <div className="card-body">
          <h5 className="card-title">🔬 Education</h5>
          <div className="d-flex justify-content-between align-items-baseline">
            <h5 className="card-title">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </h5>
            <span className="fs-4 ms-1 ">
              <div className="dropstart">
                <button
                  className="border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDots />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <p className="card-text">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <img
              className="rounded-pill object-fit-cover"
              src="person2.jpeg"
              alt="person2"
              style={{ height: "50px", width: "50px" }}
            />
            <div className="w-100 d-flex ps-3 flex-column flex-lg-row justify-content-lg-between">
              <span className="fs-5 fw-semibold">Sarah West</span>
              <span className="ps-lg-5">{<IoEyeOutline />} 1.4k views</span>
            </div>
            <button
              className="ms-5 d-flex align-items-center justify-content-center fs-4 border-0 rounded"
              style={{
                outline: "none",
                boxShadow: "none",
                height: "40px",
                width: "100px",
              }}
            >
              {<IoShareSocialSharp />}
            </button>
          </div>
        </div>
      </div>
      <div className="card mb-2 px-2">
        <img
          src="car.jpeg"
          className="card-img-top object-fit-cover"
          style={{ height: "220px" }}
          alt="car"
        />
        <div className="card-body">
          <h5 className="card-title">📅 Meetup</h5>
          <div className="d-flex justify-content-between align-items-baseline">
            <h5 className="card-title">
              Finance & Investment Elite Social Mixer @Lujiazui
            </h5>
            <span className="fs-4 ms-1 ">
              <div className="dropstart">
                <button
                  className="border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDots />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <p className="card-text d-flex justify-content-between">
            <span>
              <HiMiniCalendarDateRange /> Fri, 12 Oct, 2018
            </span>
            <span>
              <IoLocationOutline /> Ahemdabad, India
            </span>
          </p>
          <button className="btn border border-2 rounded w-100 fw-semibold text-danger my-2">
            Visit Website
          </button>
          <div className="d-flex justify-content-between align-items-center">
            <img
              className="rounded-pill object-fit-cover"
              src="person3.jpeg"
              alt="person3"
              style={{ height: "50px", width: "50px" }}
            />
            <div className="w-100 d-flex ps-3 flex-column flex-lg-row justify-content-lg-between">
              <span className="fs-5 fw-semibold">Sarah West</span>
              <span className="ps-lg-5">{<IoEyeOutline />} 1.4k views</span>
            </div>
            <button
              className="ms-5 d-flex align-items-center justify-content-center fs-4 border-0 rounded"
              style={{
                outline: "none",
                boxShadow: "none",
                height: "40px",
                width: "100px",
              }}
            >
              {<IoShareSocialSharp />}
            </button>
          </div>
        </div>
      </div>
      <div className="card mb-2 px-2">
        <div className="card-body">
          <h5 className="card-title">💼 Job</h5>
          <div className="d-flex justify-content-between align-items-baseline">
            <h5 className="card-title">Software Developer</h5>
            <span className="fs-4 ms-1 ">
              <div className="dropstart">
                <button
                  className="border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDots />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <p className="card-text d-flex justify-content-between">
            <span>
              <PiBagSimple />
              Innovaccer Analytics Private Ltd.
            </span>
            <span>
              <IoLocationOutline /> Noida, India
            </span>
          </p>
          <button className="btn border border-2 rounded w-100 fw-semibold text-success my-2">
            Apply on Timesjobs
          </button>
          <div className="d-flex justify-content-between align-items-center">
            <img
              className="rounded-pill object-fit-contain"
              src="person4.jpeg"
              alt="person4"
              style={{ height: "50px", width: "50px" }}
            />
            <div className="w-100 d-flex ps-3 flex-column flex-lg-row justify-content-lg-between">
              <span className="fs-5 fw-semibold">Sarah West</span>
              <span className="ps-lg-5">{<IoEyeOutline />} 1.4k views</span>
            </div>
            <button
              className="ms-5 d-flex align-items-center justify-content-center fs-4 border-0 rounded"
              style={{
                outline: "none",
                boxShadow: "none",
                height: "40px",
                width: "100px",
              }}
            >
              {<IoShareSocialSharp />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
