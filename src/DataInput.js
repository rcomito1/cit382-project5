import React, { useState } from "react";

export default function DataEntry({ saveData = (f) => f }) {
  const [localName, setLocalName] = useState("");
  const [localAge, setLocalAge] = useState(0);
  const [localGender, setLocalGender] = useState("");
  const [localEmployed, setLocalEmployed] = useState(false);

  const handleSaveClick = () => {
    // check to see if name is blank or if cateogry is not selected
    let isError = false;
    if (localName.trim().length < 1 || localGender === "") {
      isError = true;
      alert("Please fill in all fields!");
    }

    if (!isError) {
      // send to app
      saveData(localName, localAge, localGender, localEmployed);

      // reset values
      setLocalName("");
      setLocalAge(0);
      setLocalGender("");
      setLocalEmployed(false);
    }
  };

  console.log("Local State: ", localName, localAge, localGender, localEmployed);

  return (
    <div className="StyleInput">
      <h2>Data Entry</h2>
      Name:
      <input
        id="Name"
        type="text"
        value={localName}
        onChange={(evt) => setLocalName(evt.target.value)}
      />
      <div>
        {" "}
        <label htmlFor="AgeInput">Age: </label>
        <input
          id="Age"
          type="range"
          min={0}
          value={localAge}
          onChange={(evt) => setLocalAge(evt.target.value)}
        ></input>
        &nbsp; &nbsp;
        <input
          id="AgeInput"
          style={{ width: "10%" }}
          value={localAge}
          onChange={(evt) => setLocalAge(evt.target.value)}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="Gender">Gender: </label>
        <select
          id="GenderList"
          value={localGender}
          onChange={(evt) => setLocalGender(evt.target.value)}
        >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="EmployedCheckbox">Employed: </label>
        <input
          id="Employed"
          type="checkbox"
          checked={localEmployed}
          onChange={(evt) => setLocalEmployed(evt.target.checked)}
        />
      </div>
      <button onClick={handleSaveClick}>Add</button>
    </div>
  );
}
