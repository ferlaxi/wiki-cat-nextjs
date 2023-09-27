


const URL_API = "https://api.thecatapi.com/v1/"


//list cats breeds
export async function getCatBreedList() {
    const response = await fetch(URL_API + 'breeds')
    const data = await response.json();
    return data;
}



//Breed Beng
export async function getBreedBeng() {
    const response = await fetch(URL_API + 'images/search?breed_ids=beng', { next: { revalidate: 86400 } })
    const data = await response.json();
    return data;
}

//Breed Sava
export async function getBreedSava() {
    const response = await fetch(URL_API + 'images/search?breed_ids=sava', { next: { revalidate: 86400 } })
    const data = await response.json();
    return data;
}

//Breed Norw
export async function getbreedNorw() {
    const response = await fetch(URL_API + 'images/search?breed_ids=norw', { next: { revalidate: 86400 } })
    const data = await response.json();
    return data;
}

//Breed srex
export async function getBreedSrex() {
    const response = await fetch(URL_API + 'images/search?breed_ids=srex', { next: { revalidate: 86400 } })
    const data = await response.json();
    return data;
} 




//Get breed image
export async function getBreedImage(id : string) {
    const response = await fetch(URL_API + 'images/search?limit=9&breed_ids=' + id, { next: { revalidate: 86400 } })
    const data = await response.json();
    return data;
}

//Get info of all Breeds
export async function GetAllBreeds() {
    const response = await fetch(URL_API + 'breeds');
    const data = await response.json();
    return data;
}