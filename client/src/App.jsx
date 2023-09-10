import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  // change to only get the first 16 instead of all
  const [adventures, setAdventures] = useState(null);

  useEffect(() => {
    // call api and get all adventures
    async function getAdventures() {
      try {
        const response = await axios.get("/api/adventures/");
        console.log(response);
        console.log(response.data);
        setAdventures(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getAdventures();
  }, []);

  return (
    <div className="px-28">
      <Navbar />
      <Outlet context={{ adventures, setAdventures }} />
      <Footer />
    </div>
  );
}

export default App;
