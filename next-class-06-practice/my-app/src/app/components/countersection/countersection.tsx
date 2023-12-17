"use client";
import { useState } from "react";
import Button from "../button/button";
import Image from "next/image";

let names = ["Ahmad Sultan", "Hamid Zubair", "Danish Mustafa","Ibrar Ahmad","Usman Ghani","Afzaal Tullah","Ghulam Mustafa","Jabar Tullah","Hassan Jamal","Farhan Ahmad","Babar Jajja"];
export default function CounterSection() {
  const [index, setIndex] = useState(0);
  const nextNameHandler = () => {
    if (index < names.length - 1) {
      setIndex(index + 1);
    }
  };
  const prewNameHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const resetHandler = () => {
    setIndex(0);
  };
  return (
    <div>
      {" "}
      <h1 style={{ color: "red" ,backgroundColor:"yellow"}}>countersection</h1>
      <Button inClickHandler={prewNameHandler} title="Prew Name" />
      <span style={{ color: "green" }}>Current Name : {names[index]}</span>
      <Button   inClickHandler={nextNameHandler} title="Next Name"  />
      <br />
      <Button inClickHandler={resetHandler} title="Reset" />
      {/* <Image src="@/app/img/back1.png" alt="my pic"/> */}
    </div>
  );
}
