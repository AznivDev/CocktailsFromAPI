const CoctailApi = async function GetCocktailApi(name: string) {
  const options = {
    method: "GET",
  };
  const convertResult = fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.error(err));
  return convertResult;
};

export default CoctailApi;
