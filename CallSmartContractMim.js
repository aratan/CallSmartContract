/*
  Programmer: Víctor Arbiol (2024)
  Description: This function executes a smart contract using Web3.js. 
               It checks if the data is stored in the localStorage and if less than 10 minutes have passed since the last update. 
               since the last update. 
               
               If so, it retrieves the data from the localStorage; otherwise, it calls the contract to get the updated data. 
               the updated data.

*/
function smartcontract(e,t,n,o,a){const c=new(new Web3(new Web3.providers.HttpProvider(n)).eth.Contract)(t,e);!function(){const e=localStorage.getItem("lastUpdate");if(e){const t=6e5;if((new Date).getTime()-parseInt(e)<t){const e=localStorage.getItem([o]);return void(document.getElementById(a).innerHTML=e)}}c.methods[o]().call(((e,t)=>{e?document.getElementById(a).innerHTML=`${e}`:(document.getElementById(a).innerHTML=`${t}`,localStorage.setItem([o],t),localStorage.setItem("lastUpdate",(new Date).getTime()))}))}()}
