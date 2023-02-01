const CoctailByName = async function GetCocktailApi() {
  const options = {
    method: "POST",
  };
  const convertResult = fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.error(err));
  return convertResult;
};

export default CoctailByName;
