// This file sets the given cat's picture to the background of the page
const API_KEY =
  "live_VOZbbd602q8H85w6A0laOJiAuJk7unXGEE8KYq3i9HNimRuFc7xzkIxA5sAOE71";
export async function setBackground(breed){
    try{
        let responseImage = await fetch(`https://api.thecatapi.com/v1/images/${breed.reference_image_id}`, {
            headers: {
            "x-api-key": API_KEY,
        },
        });
        let image = await responseImage.json();
        let imageUrl = image.url;

        document.body.style.backgroundImage = `url(${imageUrl})`;
    }catch(error){
        console.log("An error has occured:", error);
    }
}