/*

<script src=https://mngz47.github.io/F-Snake/rr/cookie.js ></script>
<script src=https://mngz47.github.io/F-Snake/rr/challenge.js ></script>
<script src=https://mngz47.github.io/F-Snake/rr/payfast.js ></script>
  
*/

   import { cookie } from "https://mngz47.github.io/F-Snake/rr/cookie.js";
   import { challenge } from "https://mngz47.github.io/F-Snake/rr/challenge.js";
   import { payfast } from "https://mngz47.github.io/F-Snake/rr/payfast.js";


var credits;


function showCredits(){

  document.body.innerHTML += "<h4 style='position:absolute;float:right;' >"+credits+"</h4>";

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
  alert('Payment Successfull');
}else if(payment==0){
  setCookie("payment", 0, 30);
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

function getCredits(){
  
e("start").innerHTML = "<input type=number id=credits /><button onclick='monetize_purchase(e(\"credits\").value);return false;' >buy</button>";
  
}

var actions = 0;

function track_action(){

  if(actions%5==0){

getCredits();

  }
  
actions+=1;
}
