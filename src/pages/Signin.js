import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../signin.css";
import "../header.css";
import "../App";
import Home from "./Home";
import Product from "./Product";
import About from "./About";
import logo from "../Img/IMG.svg";
import axios from "axios";

function Signin() {
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
          <p>Création de compte</p>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mot de passe" />
          <input type="text" placeholder="Confirmez mot de passe" />

          <button>Envoyer</button>
        </form>
      </div>
    </>
  );
}

export default Signin;
