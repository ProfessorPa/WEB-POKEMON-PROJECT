// fetch = function used to make http requests to fetch resources.
//    (json style data, images, files, etc.)
//    simplifies asynchronous data fetching in js and used for interacting with APIs to retrieve and send data asynchronously over the web.
//    fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => {
//     if(!response.ok)
//     {
//       throw new Error("could not fetch resource");
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

async function fetchData() {
  try{
    const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok){
      throw new Error("could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemon-sprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  }
  catch(error){
    console.error(error);
  }
}