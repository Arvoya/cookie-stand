'use strict';

// * Global Variables 

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cityInfo = document.getElementById('city-info');
let tableH = document.createElement('table');
cityInfo.appendChild(tableH);
let tableHrow = document.createElement('tr');
tableHrow.textContent = 'Time:'
tableH.appendChild(tableHrow);
for (let i = 0; i < hours.length; i++) {
  let tableHeadData = document.createElement('td')
  tableHeadData.textContent = `${hours[i]}`;
  tableHrow.appendChild(tableHeadData);
}
const cityArray = []

function renderAll() {
  for (let i = 0; i < cityArray.length; i++) {
    cityArray[i].render();
  }
}

// * Locations
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
    customerData.innerText = `${this.cookies[i]} cookies`
    customerRow.appendChild(customerData);
    this.total += this.cookies[i];
  }

}

let Seattle = new CityStore('Seattle', 23, 65, 6.3);
let Tokyo = new CityStore('Tokyo', 3, 24, 1.2);
let Dubai = new CityStore('Dubai', 11, 38, 3.7);
let Paris = new CityStore('Paris', 20, 38, 2.3);
let Lima = new CityStore('Lima', 2, 16, 4.6);

cityArray.push(Seattle, Tokyo, Dubai, Paris, Lima);

renderAll();
