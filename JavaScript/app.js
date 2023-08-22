'use strict';

// * Global Variables 

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// * JS Window
let cityInfo = document.getElementById('city-info');

// * Initial Table with Time Header
let tableH = document.createElement('table');
cityInfo.appendChild(tableH);
let tableHrow = document.createElement('tr');
tableHrow.textContent = 'Time'
tableH.appendChild(tableHrow);
for (let i = 0; i < hours.length; i++) {
  let tableHeadData = document.createElement('th')
  tableHeadData.textContent = `${hours[i]}`;
  tableHrow.appendChild(tableHeadData);
}
let headerTotal = document.createElement('th');
headerTotal.textContent = `Daily Location Total`;
tableHrow.appendChild(headerTotal)

// * Function to Render all with one declaration
const cityArray = []
function renderAll() {
  for (let i = 0; i < cityArray.length; i++) {
    cityArray[i].render();
  }
}
function totalCookieRow() {
  let totalRow = document.createElement('tr');
  totalRow.textContent = 'Totals'
  tableH.appendChild(totalRow);
  let totalArr = []
  let totalAdd = 0;

  for(let i = 0; i < hours.length; i++) {
    
    let totalRdata = document.createElement('td');
    
    for(let k = 0; k < cityArray.length; k++) {
      totalAdd +=  (cityArray[k].cookies[i]);
      // console.log(cityArray[k].cookies[i])
    }
    
    totalArr.push(totalAdd);
    totalRdata.textContent = totalArr[i];
    totalRow.appendChild(totalRdata);
    totalAdd = 0;
    
  }

  let Ftotal = 0;
  let finalTotal = document.createElement('td');
    for(let k = 0; k < cityArray.length; k++){
      Ftotal +=cityArray[k].total
    }
  finalTotal.textContent = (Ftotal);
  totalRow.appendChild(finalTotal);

}

// * Object Constructor & Prototype methods
function CityStore (location, minCust, maxCust, cookieAvg) {
  this.name = location;
  this.minCustomer = minCust;
  this.maxCustomer = maxCust;
  this.avgCookie = cookieAvg;
  this.customer = 0;
  this.custArr = [];
  this.cookies = [];
  this.total = 0;
}

CityStore.prototype.genNum = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

CityStore.prototype.getNum = function() {
  this.customer = this.genNum(this.minCustomer, this.maxCustomer);
  this.custArr.push(this.customer);
}

CityStore.prototype.getCookies = function() {
  this.cookies.push(Math.round(this.avgCookie * this.customer));
}

CityStore.prototype.render = function() {
  for (let i = 0; i < hours.length; i++) {
    this.getNum();
    this.getCookies()
  }
  let customerRow = document.createElement('tr');
  customerRow.textContent = `${this.name}`;
  tableH.appendChild (customerRow);
  
  for (let i = 0; i < hours.length; i++) {
    let customerData = document.createElement('td');
    customerData.innerText = `${this.cookies[i]}`
    customerRow.appendChild(customerData);
    this.total += this.cookies[i];
  }
  let cityTotal = document.createElement('td')
  cityTotal.innerText = this.total;
  customerRow.appendChild(cityTotal);

}

//* Creates new Objects
let Seattle = new CityStore('Seattle', 23, 65, 6.3);
let Tokyo = new CityStore('Tokyo', 3, 24, 1.2);
let Dubai = new CityStore('Dubai', 11, 38, 3.7);
let Paris = new CityStore('Paris', 20, 38, 2.3);
let Lima = new CityStore('Lima', 2, 16, 4.6);

cityArray.push(Seattle, Tokyo, Dubai, Paris, Lima);

//* Executable Code
renderAll();
totalCookieRow();
