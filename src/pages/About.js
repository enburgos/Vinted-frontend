import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import "../header.css";
import "../App";
import logo from "../Img/IMG.svg";
import axios from "axios";

function About() {
  return (
    <div className="pageAbout">
      <Link to="/">
        <img className="logoVinted" src={logo} alt="" />
      </Link>
    </div>
  );
}

export default About;
