/*

<script src=https://mngz47.github.io/F-Snake/rr/cookie.js ></script>
<script src=https://mngz47.github.io/F-Snake/rr/challenge.js ></script>
<script src=https://mngz47.github.io/F-Snake/rr/payfast.js ></script>
  
   import { cookie } from "https://mngz47.github.io/F-Snake/rr/cookie.js";
   import { challenge } from "https://mngz47.github.io/F-Snake/rr/challenge.js";
   import { payfast } from "https://mngz47.github.io/F-Snake/rr/payfast.js";
   
*/
function initCredits(){
  
return 
  "<h3 style='color:white;display:inline-block;' onclick='toggle(e(\"buy_credits\"));' >Buy Credits:</h3>"+
  "<div id='buy_credits' >"+
  "<input type=number id=credits value=40 placeholder=credits /><button onclick='monetize_purchase(e(\"credits\").value);return false;' >buy</button>"+
  "<p><label>credit card</label><input type='checkbox' id=credit_card /><label>paypal</label><input type='checkbox' id=paypal_option /></p>"+
  "<br><br><input type=text id=voucher placeholder=voucher /><button onclick='monetize_voucher(e(\"voucher\").value);return false;' >redeem</button>"+
  "</div>"+
   "<h3 style='color:white;display:inline-block;' onclick='toggle(e(\"withdraw\"));' >Withdraw:</h3>"+
  "<div id='withdraw' style='display:none;' >"+
  "<input type=number id=credits value=40 placeholder=w_credits /><button onclick='monetize_withdraw(e(\"w_credits\").value,e(\"paypal_id\").value);return false;' >withdraw</button>"+
  "<br><br><input type=text id=paypal_id placeholder=paypal_id />"+
  "</div>"+
    "<h3 style='color:white;display:inline-block;' onclick='toggle(e(\"withdraw\"));e(\"games\").innerHTML=loadGames();' >Games:</h3>"+
  "<div id=games style='display:none;' ></div>";
  
}

function loadGames(){
var game_data = "";

  var res = sendreq("mongeziSibongakonke/game_data.json");
	res.onload = function(){
	if(res.responseText){
            
			let jsonData = JSON.parse(res.responseText);
            for(var a=0;a<jsonData["run"].length){

              var name = jsonData["run"][a].split("/");
              name = name[name.length-1];
              
              var res2 = sendreq(name+"/meta.json");
					    res2.onload = function(){

					    if(res2.responseText){
            
			        let jsonData2 = JSON.parse(res2.responseText);
              game_data += "<a href='"+jsonData2["run"]+"' class=block > <img src='"+ jsonData2["cover_image"] +"' width=150 /> "+ jsonData2["title"] +" </a>";
            
              }
              };
          }	
	}
  };
  return game_data;
}

var credits = 0;

var cost = 1;

function showCredits(){

if(getCookie("price")){
 credits =  parseInt(getCookie("price"));
}
e("credits").innerHTML = "CREDITS: "+credits;
}
//userId

var HOME = "https://mngz47.github.io/pamel_slots/index.html";

function monetize_purchase(price){
this.price = price;
this.product = "Game Credits";
this.return_url = HOME+"?pp=1";
this.cancel_url =  HOME+"?pp=0";

setCookie("price", price, 30);

  if(e("credit_card").checked){
payfast2();
  }else if(e("paypal_option").checked){
paypal();
  }
}

function monetize_voucher(price){
  this.price = price;
  if(price<100){
  
  setCookie("price", price, 30);
  setCookie("payment", 1, 30);
  setCookie("actions", 0 , 30);

    credits =  parseInt(getCookie("price"));
    showCredits();
   // toggle(e("start"));
    e("start").style.display="none";
    alert("success");
    
  }
}

function monetize_withdraw(credits,paypal_id){


  alert("success");
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

    if(e("start").style.display=="none"){
      
  showCredits();
  var actions = 0;
  
  if(getCookie("actions")){
actions = parseInt(getCookie("actions"));
  }

  if(credits>0){

  }else{
if(actions>10){
  e("start").innerHTML = initCredits();
  toggle(e("start"));
  auto_play_p_stop();
}
  }

  setCookie("price", (credits-cost) , 30);
   setCookie("actions", (actions+1) , 30);

    }else{
return true;
    }
}

    document.body.onmousedown = track_action;
