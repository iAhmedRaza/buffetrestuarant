if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready);
} else{
    ready();
}
var node = document.getElementsByClassName("prod-item")[0].childNodes.length
;
function ready(){
   
    var addToCartButtons = document.getElementsByClassName('add-cart');
    for(var i= 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
    var removeButton =document.getElementsByClassName('btn-danger');
    for (var i = 0; i < removeButton.length; i++){
        var btn = removeButton[i];
        btn.addEventListener('click', removeFromCart);
    }
 

    
}
function addToCartClicked(event){
    var buttonClicked =event.target.parentElement;
    var title =  buttonClicked.parentElement.parentElement.parentElement.getElementsByClassName('title')[0].innerHTML;
    addItem(title);
   
}
function addItem(title){
    var createRow = document.createElement('div');
    var prodItem = document.getElementsByClassName('prod-item')[0];
    var itemTitles = document.getElementsByClassName("item-title");
    
    for (var i = 0; i < itemTitles.length; i++) {      

        if (itemTitles[i].innerHTML== title){
            if(confirm('Item is already added do you want increase quantity?')){
                var qantity = itemTitles[i].parentElement.parentElement.getElementsByClassName("prod-input")[0].value;
            qantity = Number (qantity) +1;
            itemTitles[i].parentElement.parentElement.getElementsByClassName("prod-input")[0].value = qantity;
            return;
            } else{
                return;
            }
            
        }
   
    } 
    var profContent = `<div class="row text-center">
    <div class="col">
      <h4 class="item-title">${title}</h4>
    </div>
    <div class="col">
      <input type="number" class="prod-input" value="1"> 
      <button class="btn btn-danger btn-sm " style="justify-content: right;">REMOVE</button>
    </div>
    </div> <hr>`;
    createRow.innerHTML = profContent;
    prodItem.appendChild(createRow);
    document.getElementById('appear').style.display = 'none'
    createRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeFromCart);
    
    hasCartValue();
    document.getElementById('orderbtn').addEventListener('click', orderBtnClicked);

    alert('Item has been added to cart.')

}
function orderBtnClicked(){
    alert('Your order has been saved go to order now & fill it our rider is waiting for you :)');
    window.location.href = "order.html";
}
function removeFromCart(event){
    var btn = event.target;
    btn.parentElement.parentElement.parentElement.remove();
    hasCartValue();

}
function hasCartValue(){
    node = document.getElementsByClassName("prod-item")[0].childNodes.length
    ;
    if (node>1) {
        document.getElementById('orderbtn').style.display = 'inline';
    }else{
        document.getElementById('orderbtn').style.display = 'none'
    }
}
