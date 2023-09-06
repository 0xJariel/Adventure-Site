import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [adventures, setAdventures] = useState(null);
  const [myAdventures, setMyAdventures] = useState(null);

  useEffect(() => {
    // call api and get all adventures
    async function getAdventures() {
      try {
        const response = await axios.get("/api/adventures/");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }

    getAdventures();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet context={[adventures, setAdventures]} />
      <Footer />
    </>
  );
}

export default App;
