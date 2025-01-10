import Navbar from "./components/navbar/MainNavbar";
import Hero from "./components/hero/Hero";
import FilterNavbar from "./components/posts/FilterNavbar";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FilterNavbar />
      <Posts />
    </>
  );
}

export default App;
