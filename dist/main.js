(()=>{"use strict";function e(){const e=document.querySelector("#content");let n=document.createElement("div");n.id="divBody",n.innerHTML="<div id='about'>\n        <h1 id='abtTitle'>Casanova Bros Pizza & Pasta Italian Restaurant</h1>\n        <p id='abtInfo'>Started in 2008 by brothers Michael and Anthony Casanova, Casanova Bros. Pizza and Pasta has quickly made a name for itself as one of the MUST VISIT\n         destinations in the East Valley. With their knock out combination of amazing food, beer and wine as well as a great atmosphere and unparalleled customer service they \n         raise the bar of dining experiences. </p>\n    </div>\n    ",e.appendChild(n)}const n=function(){console.log("Reset Completed...initializing user click direction");const e=document.querySelector("#divBody");for(;e.childElementCount>0;)e.removeChild(e.lastChild)};console.log("test"),console.log("test2"),document.querySelector("#tabs").innerHTML="<ul>\n         <img id='logo' src='Images/logo.png' alt=\"Cassanova Brothers Logo\">\n         <li id='contact'>Contact Us<a/></li>\n         <li id='menu'>Menu<a/></li>\n         <li id='home'>Home<a/></li>\n    </ul>",function(){console.log("Page Initalized");const o=document.querySelector("#content");e(),console.log("Home Page Loaded"),document.querySelector("#menu").addEventListener("click",(()=>{n(),document.getElementById("divBody").innerHTML="<div id='Menu'>\n        <h1 id='menuTitle'>Menu</h1>\n        <p class='menuInfo'>Pizza: Large - $18, Medium - $15, Small - $12</p>\n        <p class='menuInfo'>Toppings ($.50 each): Pepperoni, sausage, ham, bacon, anchovies, peppers, olives, basil, oregano, extra cheese, and pineapple</p>\n        <br>\n        <p class='menuInfo'>Pasta ($10 a bowl): Spaghetti, Fettuccine, Tortellini, Lasagne, Rigatoni, Linguine, and Macaroni </p>\n        <p class='menuInfo'>Pasta Sauces: Alfredo, Carbonara, Marinara, Pesto</p>\n    </div>\n    ",console.log("Menu Page Loaded")})),document.querySelector("#home").addEventListener("click",(()=>{n(),o.innerHTML="",e(),console.log("Home Page Loaded")})),document.querySelector("#contact").addEventListener("click",(()=>{n(),document.getElementById("divBody").innerHTML="<div id='Contact'>\n        <h1 id='contactTitle'>Contact</h1>\n        <p class='contactInfo'>Phone: (111)-222-3333</p>\n        <p class='contactInfo'>Email: cbpizza@fakemail.com</p>\n        <p class='contactInfo'>Yelp: yelp.cbpizza.com</p>\n    </div>\n    ",console.log("Contact Page Loaded")}))}()})();