// var chicken = document.getElementById('chicken');
// chicken.addEventListener('click' , drop);
// function drop(){
//     chicken.getElementsByClassName('menu-sub-item').classList.toggle('active');
// }

 function chicken(){
     var x = document.getElementById('chicken');
     if(x.style.display==='block'){
        x.style.display = 'none';
    } else{
        x.style.display = 'block';
    } 
 }

 function beef(){
    var x = document.getElementById('beef');
    if(x.style.display==='block'){
        x.style.display = 'none';
    } else{
        x.style.display = 'block';
    } 
}

function seafood(){
    var x = document.getElementById('seafood');
    if(x.style.display==='block'){
        x.style.display = 'none';
    } else{
        x.style.display = 'block';
    } 
}
function mutton(){
    var x = document.getElementById('mutton');
    if(x.style.display==='block'){
        x.style.display = 'none';
    } else{
        x.style.display = 'block';
    } 
}
function rice(){
    var x = document.getElementById('rice');
    if(x.style.display==='block'){
        x.style.display = 'none';
    } else{
        x.style.display = 'block';
    } 
}
function vegetable(){
    var x = document.getElementById('vegetable');
    if(x.style.display==='block'){
        x.style.display = 'none';
    } else{
        x.style.display = 'block';
    } 
}
function soup(){
    var x = document.getElementById('soup');
    if(x.style.display==='block'){
        x.style.display = 'none';
    } else{
        x.style.display = 'block';
    } 
}
function dessert(){
    var x = document.getElementById('dessert');
    if(x.style.display==='block'){
        x.style.display = 'none';
    } else{
        x.style.display = 'block';
    } 
}
function specialities(){
    var x = document.getElementById('specialities');
    if(x.style.display==='block'){
        x.style.display = 'none';
    } else{
        x.style.display = 'block';
    } 
}
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
