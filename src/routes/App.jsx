import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadSpinner";
import Header from "../components/header";

function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;