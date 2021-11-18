//API URL = https://rickandmortyapi.com/api/character
let page = 1;

const pageApibutton = document.getElementById('button');

const obtenerApi = async (page) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const result = await response.json();
    document.getElementById('loading').style.display ="none";
    
    return result;
}


const UpdateDom = async (page) => {
    const result = await obtenerApi(page);
    const  data = result.results;
    const listApi = document.getElementById('list');
    const template = document.createElement('template')      
    data.forEach(element => {
        template.innerHTML += `
        <div class="list-item">
        <img src= "${element.image}">
        <h2>${element.name}</h2>
        <p>genero: ${element.gender}</p>
        <p>Origen: ${element.origin.name} </p>
        <p>specie: ${element.species} </p>
        <p>estado: ${element.status}</p>
       </div>`
    });

    listApi.innerHTML = template.innerHTML
   
}

UpdateDom(1); 

pageApibutton.addEventListener('click', () => {     
    page++;
    UpdateDom(page);
    window.scroll(0,0)
;})





 
