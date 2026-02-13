
export function getRandomCat(allBreeds){

try{
    //dconsole.log("INSIDE", allBreeds.length);
    let number = Math.floor(Math.random() * 100);
    
    while (number > allBreeds.length-1 || number<0){
        number = Math.floor(Math.random() * 100);
    }
    return allBreeds[number];
}catch(error){
    console.log("An error has occured:", error);
}

}