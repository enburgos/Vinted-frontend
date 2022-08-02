import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../Login.css";
import "../header.css";
import "../App";
import Home from "./Home";
import Product from "./Product";
import About from "./About";
import logo from "../Img/IMG.svg";
import axios from "axios";

function Login() {
  return (
    <>
      <header>
        <Link to="/">
          <img className="logo" src={logo}></img>
        </Link>
        <input
          className="searchbar"
          placeholder="Recherchez des articles"
        ></input>
        <div className="buttons">
          <Link to="/signin">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
          <Link to="/login">
            <button>Vendre des articles</button>
          </Link>
        </div>
      </header>
      <div className="form">
        <form className="formulaire">
          <p>Bienvenue !</p>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mot de passe" />

          <button>Se connecter</button>
        </form>
      </div>
    </>
  );
}

export default Login;
