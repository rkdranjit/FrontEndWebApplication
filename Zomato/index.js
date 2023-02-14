import { city } from "./city.js";
import {popularcuisines} from "./popularCuisines.js";
import{restaurant} from "./restaurant.js";
import { topRestaurant } from "./topRestaurant.js";
import { cityName } from "./deliveyCity.js";



let localitiesContainerEle=document.querySelector(".localities_container");

let localityList=city.map((ele)=>{
    return`
        <div class="localities_list">
           <div class="lacalities_card">
            <h3>${ele.name}</h3>
            <p>${ele.place ? ele.place + "places": "" }</p>
          </div>
          <i class="bi bi-chevron-right"></i>
       </div>
        `
}).join("")
localitiesContainerEle.innerHTML=localityList;


function showData(clickId,dispalyId,toggle,data,join){
  document.getElementById(clickId).addEventListener("click",()=>{
    if(toggle){
      document.getElementById(dispalyId).style.display="block";
      toggle=false;
    }else{
      document.getElementById(dispalyId).style.display="none";
      toggle=true;
    }
  })
  let popular="";
  for(let i=0;i<data.length;i++)
  {
    popular +=`
            <a class="restaurantName" href=${data[i].link}>${data[i].desc}</a>
            <span class="dot">${join}</span>
    `
  }
  document.getElementById(dispalyId).innerHTML=popular;
  
}

//popular cuisines
let toggle1=true;
showData("popularCityListId","popularcuisinesId",toggle1,popularcuisines,".");
          //click              display           value     data

//restaurant
let toggle2=true;
showData("restaurantId","restaurantDisplayDataId",toggle2,restaurant,".");


let toggle3=true;
showData("topRestauranttId","toprestaurantDisplayId",toggle3,topRestaurant,"   ");

let toggle4=true;
showData("deliveryCitiestId","deliveryCityDisplayId",toggle4,cityName," ");

