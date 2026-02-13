
export function getRandomCat(){

try{
    let number = Math.floor(Math.random() * 100);
    console.log("Random Number:", number);
}catch(error){
    console.log("An error has occured:", error);
}

}