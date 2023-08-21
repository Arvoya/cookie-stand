'use strict';

/**
 * DONE Store the min/max hourly customers, and the average cookies per customer (object properties)
 * DONE Use a method of that object to generate a random number of customers per hour. 'Objects/Math/random
 * DONE Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
 * DONE Store the results for each location in a sparate array... perhaps as a property of the object representing that location.
 * DONE Display the values of eahc array as unordered lists in the browser.
 * DONE Calculating the sum of these hourly totals
 */

// * Global Variables 

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cityInfo = document.getElementById('city-info');

// * Locations

let Seattle = {
  // * properites required
  name: `Seattle`,
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  customer: 0,
  custArr: [],
  cookies: [],
  total: 0,

  // * functions to calculate
  genNum: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  getNum: function () {
      this.customer = this.genNum(this.minCustomer, this.maxCustomer);
      this.custArr.push(this.customer);
  },
  getCookies: function(a, b) {
    this.cookies.push(this.avgCookie * this.customer);
  },
  
  //* final function to run/render it all
  render: function() {
      // * Calls functions to calculate
      for (let i = 0; i < hours.length; i++) {
        this.getNum();
        this.getCookies()
      }

      //* Create elements and Display the values
      let customerUL = document.createElement('ul');
      customerUL.textContent = `${this.name}`;
      cityInfo.appendChild(customerUL);

      for (let i = 0; i < hours.length; i++) {
        let customerLi = document.createElement('li');
        customerLi.innerText = `${hours[i]}: ${this.cookies[i]} cookies`
        customerUL.appendChild(customerLi);
        this.total += this.cookies[i];
      }

      let customerTotal = document.createElement("li");
      customerTotal.innerText = `Total: ${this.total} cookies`;
      customerUL.appendChild(customerTotal);
      
  }
    
}

let Tokyo = {
  // * properites required
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  customer: 0,
  custArr: [],
  cookies: [],
  total: 0,

  // * functions to calculate
  genNum: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  getNum: function () {
      this.customer = this.genNum(this.minCustomer, this.maxCustomer);
      this.custArr.push(this.customer);
  },
  getCookies: function(a, b) {
    this.cookies.push(this.avgCookie * this.customer);
  },
  
  //* final function to run/render it all
  render: function() {
      // * Calls functions to calculate
      for (let i = 0; i < hours.length; i++) {
        this.getNum();
        this.getCookies()
      }

      //* Create elements and Display the values
      let customerUL = document.createElement('ul');
      customerUL.textContent = `${this.name}`;
      cityInfo.appendChild(customerUL);

      for (let i = 0; i < hours.length; i++) {
        let customerLi = document.createElement('li');
        customerLi.innerText = `${hours[i]}: ${this.cookies[i]} cookies`
        customerUL.appendChild(customerLi);
        this.total += this.cookies[i];
      }

      let customerTotal = document.createElement("li");
      customerTotal.innerText = `Total: ${this.total} cookies`;
      customerUL.appendChild(customerTotal);
      
  }
    
}

let Dubai = {
  // * properites required
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  customer: 0,
  custArr: [],
  cookies: [],
  total: 0,

  // * functions to calculate
  genNum: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  getNum: function () {
      this.customer = this.genNum(this.minCustomer, this.maxCustomer);
      this.custArr.push(this.customer);
  },
  getCookies: function(a, b) {
    this.cookies.push(this.avgCookie * this.customer);
  },
  
  //* final function to run/render it all
  render: function() {
      // * Calls functions to calculate
      for (let i = 0; i < hours.length; i++) {
        this.getNum();
        this.getCookies()
      }

      //* Create elements and Display the values
      let customerUL = document.createElement('ul');
      customerUL.textContent = `${this.name}`;
      cityInfo.appendChild(customerUL);

      for (let i = 0; i < hours.length; i++) {
        let customerLi = document.createElement('li');
        customerLi.innerText = `${hours[i]}: ${this.cookies[i]} cookies`
        customerUL.appendChild(customerLi);
        this.total += this.cookies[i];
      }

      let customerTotal = document.createElement("li");
      customerTotal.innerText = `Total: ${this.total} cookies`;
      customerUL.appendChild(customerTotal);
      
  }
    
}

let Paris = {
  // * properites required
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  customer: 0,
  custArr: [],
  cookies: [],
  total: 0,

  // * functions to calculate
  genNum: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  getNum: function () {
      this.customer = this.genNum(this.minCustomer, this.maxCustomer);
      this.custArr.push(this.customer);
  },
  getCookies: function(a, b) {
    this.cookies.push(this.avgCookie * this.customer);
  },
  
  //* final function to run/render it all
  render: function() {
      // * Calls functions to calculate
      for (let i = 0; i < hours.length; i++) {
        this.getNum();
        this.getCookies()
      }

      //* Create elements and Display the values
      let customerUL = document.createElement('ul');
      customerUL.textContent = `${this.name}`;
      cityInfo.appendChild(customerUL);

      for (let i = 0; i < hours.length; i++) {
        let customerLi = document.createElement('li');
        customerLi.innerText = `${hours[i]}: ${this.cookies[i]} cookies`
        customerUL.appendChild(customerLi);
        this.total += this.cookies[i];
      }

      let customerTotal = document.createElement("li");
      customerTotal.innerText = `Total: ${this.total} cookies`;
      customerUL.appendChild(customerTotal);
      
  }
    
}

let Lima = {
  // * properites required
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  customer: 0,
  custArr: [],
  cookies: [],
  total: 0,

  // * functions to calculate
  genNum: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  getNum: function () {
      this.customer = this.genNum(this.minCustomer, this.maxCustomer);
      this.custArr.push(this.customer);
  },
  getCookies: function(a, b) {
    this.cookies.push(this.avgCookie * this.customer);
  },
  
  //* final function to run/render it all
  render: function() {
      // * Calls functions to calculate
      for (let i = 0; i < hours.length; i++) {
        this.getNum();
        this.getCookies()
      }

      //* Create elements and Display the values
      let customerUL = document.createElement('ul');
      customerUL.textContent = `${this.name}`;
      cityInfo.appendChild(customerUL);

      for (let i = 0; i < hours.length; i++) {
        let customerLi = document.createElement('li');
        customerLi.innerText = `${hours[i]}: ${this.cookies[i]} cookies`
        customerUL.appendChild(customerLi);
        this.total += this.cookies[i];
      }

      let customerTotal = document.createElement("li");
      customerTotal.innerText = `Total: ${this.total} cookies`;
      customerUL.appendChild(customerTotal);
      
  }
    
}

// * Executable Code
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
