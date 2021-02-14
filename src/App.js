import React, { useState } from "react";
import "./styles.css";

import DataEntry from "./DataInput.js";
import NameList from "./DataList.js";
import DataGraph from "./DataGraph.js";

export default function App() {
  //input values
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [employed, setEmployed] = useState(false);

  //list value
  const [list, setList] = useState([]);

  //lifting state
  const dataEntry = (name, age, gender) => {
    console.log("** add person **");
    setName(name);
    setAge(age);
    setGender(gender);
    setEmployed(employed);

    // adding to list
    setList((oldList) => [...oldList, [name, age, gender, employed]]);
  };

  console.log("App:", name, age, gender, employed);

  // clearing list and input boxes
  const clearList = () => {
    console.log("** cleared **");
    setName("");
    setAge(0);
    setGender("");
    setEmployed(false);
    setList([]);
  };

  return (
    <div className="App">
      <h1>Group 23 Project 5</h1>
      <NameList peopleInfo={list} clearList={clearList} />
      <DataEntry saveData={dataEntry} />
      <hr />
      <DataGraph />
      <hr />
    </div>
  );
}
