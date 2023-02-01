import React, { useEffect, useState } from "react";
import { Coctail } from "../components/Cocktail";
import { Cocktail } from "../types/CocktailType";
import CoctailByName from "../services/CoctailApi";
import CoctailByIdApI from "../services/CoctailByIdApI";
import AllCocktails from "../services/AllCocktails";
import "../assets/styles/cocktails.scss";

export const Coctails: React.FC = () => {
  const [cocktailName, setCocktailName] = useState<string>("");
  const [coctails, setCoctails] = useState<Cocktail[]>([]);

  async function handleCoctailByName() {
    const data = await CoctailByName(cocktailName);
    setCoctails(data.drinks);
  }

  async function handleRandomCoctail() {
    const data = await CoctailByIdApI();
    setCoctails(data.drinks);
  }

  function getCocktailName(e: React.ChangeEvent<HTMLInputElement>) {
    setCocktailName(e.target.value);
  }

  async function getAllCocktails() {
    const data = await AllCocktails();
    setCoctails(data.drinks);
  }

  useEffect(() => {
    getAllCocktails();
  }, []);

  return (
    <div className="coctailsContainer">
      <div className="searchContainer">
        <input
          type="input"
          placeholder="Search for Cocktail..."
          onChange={(e) => {
            getCocktailName(e);
          }}
        />
        <div
          className="iconContainer"
          onClick={(e) => {
            e.preventDefault();
            handleCoctailByName();
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <button
        className="oneCocktailBtn"
        onClick={(e) => {
          e.preventDefault();
          handleRandomCoctail();
        }}
      >
        Genereate random Cocktail
      </button>
      <Coctail cocktauils={coctails} />
    </div>
  );
};
