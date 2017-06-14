// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
var customer = document.querySelector(".customer");

(function () {
  fetch("https://randomuser.me/api/").then(function(customerData){
  console.log(customerData);  
  return customerData.json();  
}).then(function(data){
  console.log(data.results);
  var customerInfo = data.results;
  customer.innerHTML = customerInfo[0].name.first + " " + customerInfo[0].name.last;


  });
  'use strict';



})();