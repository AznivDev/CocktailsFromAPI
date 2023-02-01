import React, { useState } from "react";
import { Cocktail } from "../types/CocktailType";
import "../assets/styles/cocktailComponent.scss";

interface ICocktailData extends React.HTMLAttributes<HTMLButtonElement> {
  cocktauils: Cocktail[];
}

export const Coctail: React.FC<ICocktailData> = ({ cocktauils }) => {
  return (
    <div className="cocktailComponent">
      {cocktauils.map((data: any) => (
        <div key={data.idDrink} className="cocktailCard">
          {
            <img
              src={data.strDrinkThumb}
              height={50}
              width={50}
              alt="drink image"
            />
          }
          <div className="titleComponent">
            <p>{data.strDrink}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
