var myObj, i, output = "", result = 0;
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

myObj =
[
  {name:"apple", count: 5, price: 70},
  {name:"orange", count: 10, price: 90},
  {name:"melon", count: 15, price: 30}
]

for (i in myObj) {
  output += "<h2>" + myObj[i].name + "</h2>";
  output += "<h3>" + myObj[i].count + "</h3>";
  output += "<h3>" + myObj[i].price + "</h3>";
  result += myObj[i].price * myObj[i].count;
}

output += "<h1> result is " + result + "</h1>";
output += date;

document.getElementById("first-script").innerHTML = output;