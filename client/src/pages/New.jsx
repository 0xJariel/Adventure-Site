import React, { useState } from "react";
import axios from "axios";

function New() {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const createFormData = () => {
    const fd = new FormData();
    // inputs.forEach((input) => {
    //   console.log(input);
    // });
    fd.append("title", title);
    fd.append("description", description);
    fd.append("category", category);
    fd.append("file", file);
    console.log(`new form data created: ${fd}`);
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
    console.log("form submitted");

    // could do this instead >>
    // >> but i would be getting that state from the form and not from react states
    // const fd = new FormData(e.target);
    const formData = createFormData();
    console.log(formData);

    if (!vibeCheck(formData)) {
      console.log("vibe check failed :/");
      return;
    }
    try {
      console.log(title, category, description, file);
      const newAdventure = await axios.post("/api/adventures/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
        },
      });
    } catch (error) {
      console.log(error);
      return;
    }
    console.log("Vibe check passed & form submitted :)");
    console.log(newAdventure);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </label>
        <label
          htmlFor="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        >
          Description:
          <input type="text" />
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
            name="myImage"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => {
              setFile(e.target.files[0]);
              console.log(file);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default New;
