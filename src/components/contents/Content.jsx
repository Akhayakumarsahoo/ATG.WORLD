import FilterNavbar from "./FilterNavbar";
import Groups from "./Groups";
import Posts from "./Posts";

function Content() {
  return (
    <div className="Content container row pe-0">
      <div className="offset-md-1 offset-lg-2 p-0 col-lg-10">
        <FilterNavbar />
        <div className="d-flex row">
          <div className="col-lg-8 p-0">
            <Posts />
          </div>
          <div className="col-4 d-none d-lg-block">
            <Groups />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
