const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const contries=[];
fetch(endpoint).then(blob=>blob.json()).then(data =>contries.push(...data));

let input = document.querySelector("#input");
let suggestions = document.querySelector(".suggestions");

function filterContries(text,contries){
    return contries.filter((place)=>{
        let reg=new RegExp(text,'gi');
        return place.city.match(reg) || place.state.match(reg) 
    });
}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}

function displayMatches(){
    let filteredContries= filterContries(this.value,contries);
    let html=filteredContries.map(place=>{
        let reg=new RegExp(this.value,'gi');
        const cityName=place.city.replace(reg,`<span class="hl">${this.value}</span>`)
        const stateName=place.state.replace(reg,`<span class="hl">${this.value}</span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `.replace(event.target.value,`<span class="hl">${event.target.value}</span>`);
    }).join('');

    suggestions.innerHTML=html;
}

input.addEventListener('change',displayMatches);
input.addEventListener('keyup',displayMatches);