const API_KEY =
  "live_VOZbbd602q8H85w6A0laOJiAuJk7unXGEE8KYq3i9HNimRuFc7xzkIxA5sAOE71";
import * as external1 from "./external/external-1.js";
import * as external2 from "./external/external-2.js";
import * as external3 from "./external/external-3.js";

// I'm using the CAT API for this assignment.
  let response = await fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  let breeds = await response.json()
  let allBreeds = breeds; 
  console.log(allBreeds.length);




let randomCat = external2.getRandomCat(allBreeds);

external1.getCats(randomCat);
external3.setBackground(randomCat)

document.getElementById("search-button").addEventListener("click", function(){
    let input = document.getElementById("search-box").value;
    console.log(input);
})