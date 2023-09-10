import React, { useState } from "react";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

function New() {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // dont understand why this isnt working
  const createFormData = () => {
    const fd = new FormData();

    // Append the values to the FormData object
    fd.append("title", title);
    fd.append("description", description);
    fd.append("category", category);
    fd.append("file", file);

    return fd;
  };

  const vibeCheck = () => {
    switch (true) {
      case file === "":
        return false;
      case title === "":
        return false;
      case description === "":
        return false;
      case category === "":
        return false;
      default:
        return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = createFormData();
    console.log(...formData);
    console.log(file.name); // Log the file name
    console.log(file.size); // Log the file size

    // if (!vibeCheck(formData)) {
    //   console.log("vibe check failed :/");
    //   return;
    // }

    try {
      const response = await axios.post("/api/adventures/new", formData);
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">
          Title:
          <input
            name="title"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            name="description"
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
        </label>
        <label htmlFor="category">
          Choose a category:
          <select
            id="category"
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category} // Bind the selected value to the state variable
            required // Make it a required field
          >
            <option value="">Select a category</option>
            <option value="Hiking">Hiking</option>
            <option value="Backpacking">Backpacking</option>
            <option value="Rafting">Rafting</option>
            <option value="Ski Touring">Ski Touring</option>
          </select>
        </label>
        <label>
          {`Your Image File(s)`}:
          <input
            type="file"
            name="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default New;
