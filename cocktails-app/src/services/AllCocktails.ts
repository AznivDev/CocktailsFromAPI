const AllCocktails = async function GetCocktailApi() {
  const options = {
    method: "GET",
  };
  const convertResult = fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.error(err));
  return convertResult;
};

export default AllCocktails;
