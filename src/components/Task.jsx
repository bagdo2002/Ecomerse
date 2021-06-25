import { ArrowLeft } from "@material-ui/icons";
import React, { useState } from "react";
import "./task.css";
const Task = () => {
  const check = (page, digits) => {
    const string = page.toString();
    const secString = digits.toString();
    let arr = [];
    if (page + digits < 10) {
      for (let i = page; i < digits + page; i++) {
        arr.push(i);
      }
      return arr;
    } else if (string.length === 2 && digits % 2 != 0) {
      const a = Math.trunc(digits / 2);
      for (let i = page; i < page + a; i++) {
        arr.push(i);
      }
      return arr;
    } else if (string.length === 2 && digits % 2 === 0) {
      const a = digits / 2;
      for (let i = page; i < page + a; i++) {
        arr.push(i);
      }
      return arr;
    } else if (string.length === 1 && secString.length != 2) {
      const final = Math.trunc(digits - 9 / 2);
      for (let i = 9; i < digits; i++) {
        arr.push(i);
      }
      for (let i = page; i <= 9; i++) {
        const b = digits - 9;
        arr.push(i);
      }
    }
  };
  console.log(check(2, 11));

  return <div className="container"></div>;
};

export default Task;
