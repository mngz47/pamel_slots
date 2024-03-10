/*

<script src=https://mngz47.github.io/F-Snake/rr/cookie.js ></script>
<script src=https://mngz47.github.io/F-Snake/rr/challenge.js ></script>
<script src=https://mngz47.github.io/F-Snake/rr/payfast.js ></script>
  
   import { cookie } from "https://mngz47.github.io/F-Snake/rr/cookie.js";
   import { challenge } from "https://mngz47.github.io/F-Snake/rr/challenge.js";
   import { payfast } from "https://mngz47.github.io/F-Snake/rr/payfast.js";
   
*/

var credits = 0;

var cost = 1;

function showCredits(){

if(getCookie("price")){
 credits =  parseInt(getCookie("price"));
}
  document.body.innerHTML += "<h4 style='position:absolute;float:right;margin:4px;background:rgba(0,0,0,0.7);color:white;' >CREDITS: "+credits+"</h4>";

}
//userId

var HOME = "https://mngz47.github.io/pamel_slots/index.html";

function monetize_purchase(price){
this.price = price;
this.product = "Game Credits";
this.return_url = HOME+"?pp=1";
this.cancel_url =  HOME+"?pp=0";

setCookie("price", price, 30);
  
payfast2();

}

function checkCredits(){
const urlParams = new URLSearchParams(window.location.search);
const payment = urlParams.get('pp');

    if(getCookie("price")!=null){
  if(payment!=null){
if(payment==1){
  setCookie("payment", 1, 30);
  setCookie("actions", 0 , 30);
  alert('Payment Successfull');
}else if(payment==0){
  setCookie("payment", 0, 30);
   setCookie("price", 0 , 30);
    setCookie("actions", 0 , 30);
alert('Payment Cancelled');
}
}
  }
}

function confirmCredits(){
 var activeChallenge = getCookie("payment")==1;

  if(activeChallenge){
if(getCookie("price")){
 credits =  parseInt(getCookie("price"));
}
  }

}

checkCredits();
confirmCredits();
showCredits();


async function track_action(){
    showCredits();
var actions = 0;
  
  if(getCookie("actions")){
actions = parseInt(getCookie("actions"));
  }

  if(credits>0){

  }else{
if(actions>10){
toggle(e("start"));
}
  }

  setCookie("price", (credits-cost) , 30);
   setCookie("actions", (actions+1) , 30);
}
