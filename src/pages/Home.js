import { useState, useEffect } from "react";
import "../App.css";
import "../header.css";
import logo from "../Img/IMG.svg";
import axios from "axios";

import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {isLoading === true ? (
        <h1>En cours de chargement</h1>
      ) : (
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
          <main>
            <div className="mainImg">
              <img src="https://www.vinted.fr/assets/seller-promotion/other/banner-wide-9b45d0aa9a311c4ff6013e9cf3bc2b6646468be3d2f553192c63598685fcc177.jpg"></img>
              <div className="infoImg">
                <p>Prets à faire du tri dans vos placards ?</p>
                <button>Vends maintenant</button>
                <span>Découvrir comment ca marche</span>
              </div>
            </div>

            <div className="categorie-left">
              {data.offers.map((categorie) => {
                return (
                  categorie.product_name.length > 0 && (
                    <div className="sub-categorie">
                      <div className="fiche-image">
                        <h2>{categorie.product_name}</h2>

                        {categorie.product_pictures.map((images) => {
                          return (
                            <div className="image">
                              <img src={images.url} alt="img" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
