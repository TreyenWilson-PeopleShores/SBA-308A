const API_KEY =
  "live_VOZbbd602q8H85w6A0laOJiAuJk7unXGEE8KYq3i9HNimRuFc7xzkIxA5sAOE71";
import * as external1 from "./external/external-1.js";

// I'm using the CAT API for this assignment.
  let response = await fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  let breeds = await response.json()
  let allBreeds = breeds; 


external1.getCats();