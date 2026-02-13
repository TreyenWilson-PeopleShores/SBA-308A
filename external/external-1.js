const API_KEY =
  "live_VOZbbd602q8H85w6A0laOJiAuJk7unXGEE8KYq3i9HNimRuFc7xzkIxA5sAOE71";


// This file will be used to gather the pictures and put them into an array.


export async function getCats(){
    try{
        let responseImage = await fetch(`https://api.thecatapi.com/v1/images/${selectedBreed.reference_image_id}`, {
            headers: {
            "x-api-key": API_KEY,
        },
        });
        let image = await responseImage.json();
        let imageUrl = image.url;
    } catch (error){
        console.log(error);
    }
    console.log("CONNECTED")
}
