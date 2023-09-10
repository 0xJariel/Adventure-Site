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

  