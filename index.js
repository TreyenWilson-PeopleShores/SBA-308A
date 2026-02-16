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
  //console.log(allBreeds[3].reference_image_id);

async function searchBreeds(input){ // this searchs through the breeds for the user input
    try{
        let searchTerm = input;
        let searchName = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, {
            headers: {
            "x-api-key": API_KEY,
            },
        });
        let searchResults = await searchName.json()
        let breedResults = searchResults; 
        document.getElementById("search-results").innerHTML = ``;        
        for(let breed of breedResults){
            
            //console.log("RESULT", breed);
            document.getElementById("search-results").innerHTML += `<li>${breed.name}</li>`;
            console.log("RESULT", breed.name);        

        }
        console.log(breedResults);
    }
    catch(error){
        console.log("An error has occured:", error);
    }
}

async function voteBreed(breed, voteValue){
    try{

        await fetch(`https://api.thecatapi.com/v1/votes/`, {
            method: "POST",
            headers: {
                'content-type':"application/json",
                'x-api-key': API_KEY
            },
            body: JSON.stringify({
                breed_id: breed.reference_image_id,
                value: voteValue,
            }),
        });
        console.log("Body being sent:", JSON.stringify({
            image_id: breed.reference_image_id,
            value: voteValue
        }));
        console.log("https://api.thecatapi.com/v1/votes/")
        
    }catch(error){
        console.log("Voting error:", error);
    }
}

voteBreed(allBreeds[3], 1);
let randomCat = external2.getRandomCat(allBreeds);

external1.getCats(randomCat);
external3.setBackground(randomCat)

document.getElementById("search-button").addEventListener("click", function(){
    let input = document.getElementById("search-box").value;
    console.log(input);
    let inputCorrect = false;
    for(let breed of allBreeds){ //change background to user pick
        if (breed.name === input || breed.id === input || breed.alt_names === input){
            external3.setBackground(breed)
            inputCorrect = true;
            break;
        }
    }
        if(inputCorrect === false){
            console.log("HERE", input);
            searchBreeds(input);
        }
})

console.log(allBreeds[6]);



