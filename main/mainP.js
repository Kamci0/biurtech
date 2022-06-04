
const photos2 = ["../img/changing/chairs/chair1.jpg",
"../img/changing/chairs/chair2.jpg",
"../img/changing/chairs/chair3.jpg",
"../img/changing/chairs/chair4.jpg",
"../img/changing/desks/desk1.webp",
"../img/changing/desks/desk2.webp",
"../img/changing/desks/desk3.webp",
"../img/changing/desks/desk4.webp",
"../img/changing/elec/elec1.jpg",
"../img/changing/elec/elec2.jpg",
"../img/changing/elec/elec3.jpg",
"../img/changing/elec/elec4.jpg"];

const names2 = [
"Fotel biurowy Zira",
"Fotel biurowy Shine czarny",
"Fotel biurowy Shine biały",
"Fotel gabinetowy Corium",
"Biurko Mati grafit",
"Biurko Lofter LO9",
"Biurko Berg 6 crem/dąb złoty",
"136x66x18 Model 0 Czarny Low",
"Mysz APPLE Magic Mouse 2 Biała",
"Mysz LOGITECH MX Anywhere 3 Grafitowy",
"Logitech MX Keys",
"Logitech K270"
];

const links2=[
"../products/chairs/chair1.html",
"../products/chairs/chair2.html",
"../products/chairs/chair3.html",
"../products/chairs/chair4.html",
"../products/desks/desk1.html",
"../products/desks/desk2.html",
"../products/desks/desk3.html",
"../products/desks/desk4.html",
"../products/elec/elec1.html",
"../products/elec/elec2.html",
"../products/elec/elec3.html",
"../products/elec/elec4.html"
];

var photo2 = document.getElementsByClassName("photoP");
var link2 = document.getElementsByClassName("linkP");
var name2 = document.getElementsByClassName("nameP");

var arr = [];
while(arr.length < 4){
    var r = Math.floor(Math.random() * 11);
    if(arr.indexOf(r) === -1) arr.push(r);
}

window.onload = random4;

function random4(){
    zamien();

    for(var i = 0 ; i<=photo2.length ; i++){
        photo2[i].src=photos2[arr[i]];
        name2[i].innerHTML=names2[arr[i]];
        link2[i].href=links2[arr[i]];
    }
}