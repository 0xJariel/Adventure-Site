import React, { useState } from "react";
import axios from "axios";

function New() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const handleTitleChange = () => {};
  const handleDescriptionChange = () => {};
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e);
  };

  const formExtractor = (e) => {
    const inputs = e.target;
    console.log(inputs);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title);
    fd.append("description", description);
    fd.append("file", file);

    if (!file) {
      console.log("Inputs do not pass the vibe check :/");
      return;
    }

    console.log("form passes vibe check.");
    console.log(`check it out brah ${fd}`);

    // axios.post("/api/adventures/new", fc);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" onChange={handleTitleChange} />
        </label>
        <label htmlFor="description" onChange={handleDescriptionChange}>
          Description:
          <input type="text" />
        </label>
        <label>
          {`Your Image File(s)`}:
          <input
            type="file"
            name="myImage"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleFileChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default New;
