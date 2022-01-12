//connect to API
let path = "https://bouncehouserentalco.ourers.com/api/read/items/"; 
let devKey = "?&key=9dNjnWey36ChnTgk593KzkS78E3bNRLdhwh27ddzMaa";
let token =  "&token=bouncehouserentalco_20691042eb9cfd0f04419a8fbc914fa2";

const api = path+ devKey + token;
const url = encodeURI(api) 
let itemsList= [];

window.addEventListener('DOMcontentLoaded', loadContent)

//displays loaded content
function loadContent(){
    getItemList();
    btnfunction();   
}

fetch(url)
    .then (res => res.json()) 
    .then(data => {console.log(data); itemsList= data})

//activate on keyup
const searchBar = document.getElementById('searchBar');
//activate onclick
// const searchBtn = document.getElementById('searchBtn');

//searchBar.addEventListener("keyup", getItemList); 
const itemsFilter = document.getElementById('itemsFilter');

// create filter link variable
var filterLink = itemList.row.filter( item => )
//filter out items by name 
function getItemList(){
    console.log(itemsList);
    let filteredItems = itemsList.rows.filter(item=> item.name.includes(searchBar.value));

    //create the filtered items element
    filteredItems.forEach(filteredItem => {
        let itemDiv = `
        <div class="item">
            <a href="https://bouncehouserentalco.ourers.com/items/${filteredItem.link}/" onclick="https://bouncehouserentalco.ourers.com/items/${filteredItem.link}">
                <img src="${filteredItem.picture}" class="filteredImg" alt=""/> 
                <h2 class="itemName" >${filteredItem.name}</h2>
                <span class="itemPrice" >$${filteredItem.base_cost}</span>
            </a>
        </div>
        `
        itemsFilter.insertAdjacentHTML("beforeend", itemDiv);
    });
}

function searchBnt() { 

}
 

