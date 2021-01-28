<!DOCTYPE html>
<html>
<head>
<title>Productlists | Pamel Slots</title>
<link rel=stylesheet href=rr/style.css />
<link rel=stylesheet href=rr/bootstrap.min.css />

<meta name="autor" content="Mongezi Mafunda" />
</head>
<body>

<script src=rr/api.js ></script>
<script src=rr/verification.js ></script>

<script src="https://connect.facebook.net/en_US/fbinstant.6.3.js"></script>

<script>

   FBInstant.initializeAsync()
  .then(function(){
  
FBInstant.startGameAsync()
  .then(function() {

  // Retrieving context and player information can only be done
  // once startGameAsync() resolves
  
  var contextId = FBInstant.context.getID();
  var contextType = FBInstant.context.getType();

});


  }
);

</script>


<div id=container class=container >

<div class="body row" >
<div class="col-sm-3" >
<div id=left_pane class="left_pane" >

</div>
</div>
<div class="content col-sm-6" >
<a name=main ></a>
<div id="main" class=main >
<h2>Pamel Slots</h2>
<div class=block id=winning_chance ></div>
<script>
var winning_command = Math.round(Math.random()*9);

while(winning_command<4){
winning_command = Math.round(Math.random()*9);
}

var success_chance = (100/(winning_command**3));
success_chance = Math.round(success_chance<1?success_chance*100:success_chance);


e('winning_chance').innerHTML = 'Match the same image/number 3 times and claim your cash price - terms and conditions apply.<strong style="display:block;text-align:center;" class=highlight >WINNING CHANCE('+success_chance+'%)</strong>';

var img1;var img2;var img3;

var houses =
[
'https://prppublicstore.blob.core.windows.net/live-za-images/property/784/11/4422784/images/property-4422784-94493998_mo.jpg',
'https://prppublicstore.blob.core.windows.net/live-za-images/property/1980/46/4993980/images/property-4993980-24549336_mo.jpg',
'https://prppublicstore.blob.core.windows.net/live-za-images/property/1460/12/4325460/images/property-4325460-98464824_mo.jpg',
'https://prppublicstore.blob.core.windows.net/live-za-images/property/565/27/4554565/images/property-4554565-39589803_mo.jpg',
'https://prppublicstore.blob.core.windows.net/live-za-images/property/1777/46/4993777/images/property-4993777-42121735_mo.jpg',
'https://prppublicstore.blob.core.windows.net/live-za-images/property/1295/7/4915295/images/property-4915295-8116669_mo.jpg',
'https://prppublicstore.blob.core.windows.net/live-za-images/property/1757/30/4261757/images/property-4261757-2872140_mo.jpg',
'https://prppublicstore.blob.core.windows.net/live-za-images/property/3/0/4900003/images/property-4900003-8650143_mo.jpg',
'https://prppublicstore.blob.core.windows.net/live-za-images/property/840/49/4398840/images/property-4398840-91083193_mo.jpg',
'https://prppublicstore.blob.core.windows.net/live-za-images/property/90/42/4884090/images/property-4884090-49357058_mo.jpg'
];

var cars = 
[
'https://www.aaax.co.za/images/car_mercedes_sls_front.jpg',
'https://www.aaax.co.za/images/ferrari_f430_spider.jpg',
'https://www.aaax.co.za/images/Lamborghini-Gallardo-Spyder_yelo_stat.jpg',
'https://www.aaax.co.za/images/car_maserati_gran_turismo_s.jpg',
'https://www.aaax.co.za/images/car_mercedes_slk55_front.jpg',
'http://getwallpapers.com/wallpaper/full/8/0/b/654962.jpg',
'http://getwallpapers.com/wallpaper/full/8/1/4/654977.jpg',
'http://getwallpapers.com/wallpaper/full/d/4/d/655006.jpg',
'http://getwallpapers.com/wallpaper/full/c/2/4/655046.jpg',
'http://getwallpapers.com/wallpaper/full/0/d/b/655071.jpg'
];

var fruits = 
[
'https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/52533/orange-fruit-vitamins-healthy-eating-52533.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/59945/strawberry-fruit-delicious-red-59945.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/953215/pexels-photo-953215.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/38283/bananas-fruit-carbohydrates-sweet-38283.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/59680/pexels-photo-59680.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg?auto=compress&cs=tinysrgb&h=350'
];

var vegs = 
[
'https://images.pexels.com/photos/37641/carrots-basket-vegetables-market-37641.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/107524/pexels-photo-107524.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/162673/potatoes-vegetables-erdfrucht-bio-162673.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/8694/food-vegetables-cucumbers.jpg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/175414/pexels-photo-175414.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/63596/fruit-pepper-vegetable-vegetables-63596.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/977890/pexels-photo-977890.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg?auto=compress&cs=tinysrgb&h=350',
'https://images.pexels.com/photos/968254/pexels-photo-968254.jpeg?auto=compress&cs=tinysrgb&h=350'
];

img1 = houses[0];
img2 = cars[0];
img3 = fruits[0];

function play_p(){

if(e('g_type').value!=-1){

e("I_1").src='rr/loader.gif';
e("I_2").src='rr/loader.gif';
e("I_3").src='rr/loader.gif';

var cost = (e('g_type').value=='houses'?50:(e('g_type').value=='cars'?25:(e('g_type').value=='fruits'?10:5)));

var p1 = Math.round(Math.random()*winning_command);
var p2 = Math.round(Math.random()*winning_command);
var p3 = Math.round(Math.random()*winning_command);


if(e('g_type').value=='houses'){
img1 = houses[p1];
img2 = houses[p2];
img3 = houses[p3];
}else if(e('g_type').value=='cars'){
img1 = cars[p1];
img2 = cars[p2];
img3 = cars[p3];
}else if(e('g_type').value=='fruits'){
img1 = fruits[p1];
img2 = fruits[p2];
img3 = fruits[p3];
}else if(e('g_type').value=='vegs'){
img1 = vegs[p1];
img2 = vegs[p2];
img3 = vegs[p3];
}

setTimeout(function(){ e("I_1").src=img1;e("I_1").alt=p1; }, 1000);
setTimeout(function(){ e("I_2").src=img2;e("I_2").alt=p2; }, 2000);
setTimeout(function(){ e("I_3").src=img3;e("I_3").alt=p3; }, 3000);

setTimeout(function(){ 

if(p1==p2 && p1==p3){
alert('You have WON! We will send you email with further details.');
   
}else{
alert('Try Again');
}
 }, 4000);

}else{ 
alert('Choose Cash Price...');
}

}

function setAmount(vv){

var aa = (vv=='houses'?100:(vv=='cars'?50:(vv=='fruits'?25:5)));

e('amount').value = aa;
e('return_url').value+='&vv='+vv;
}

</script>
<p>
<select name=type class=form-control id=g_type onchange=setAmount(this.value); >
<option value=-1 >
Choose Cash Price...</option>
<option id=houses value=houses >
houses=R100000</option>
<option id=cars value=cars >cars=R50000</option>
<option id=fruits value=fruits >
fruits=R25000</option>
<option id=vegs value=vegs >
vegs=R5000</option>
</select>

</p>
<table class=table >
<tr>
<td><img id=I_1 src=rr/loader.gif width=100px /></td>
<td><img id=I_2 src=rr/loader.gif width=100px /></td>
<td><img id=I_3 src=rr/loader.gif width=100px /></td>
</tr>
</table>

<button class="btn btn-default" style="width:100%;margin-bottom:20px;" onclick="e('payment_ff').submit();return false;" id=play >PLAY</button>

<script>

setTimeout(function(){ e("I_1").src=img1;e("I_1").alt=0; }, 1000);
setTimeout(function(){ e("I_2").src=img2;e("I_2").alt=0; }, 2000);
setTimeout(function(){ e("I_3").src=img3;e("I_3").alt=0; }, 3000);

setInterval(function(){

if(e('play').style.backgroundColor=='purple'){
e('play').style.backgroundColor='red';
}else if(e('play').style.backgroundColor=='red'){
e('play').style.backgroundColor='yellow';
}else{
e('play').style.backgroundColor='purple';
}

},1000);

const urlParams = new URLSearchParams(window.location.search);
const amount = urlParams.get('vv');
const payment = urlParams.get('pp');

if(amount && payment==1){
e(amount).selected = true;
play_p();
}else if(payment==0){
alert('Payment Cancelled');
}


</script>
<div class="block center" >
<p>
A tribute to women's month. Thank you mommy for never leaving me,
paying my rent, life would be different without you.
</p>
<a style="float:right" href="https://m.facebook.com/profile.php?id=100006964680081&ref=content_filter" >by Ennock M Art</a>
<img src=ennock_art_m.jpg width=100% />
</div>
</div>
<style>
.main h2 {
background-image:url(pamel_slots.png);
background-repeat:no-repeat;
background-size:25px;
background-position:0px 0px;
padding-left:30px;
}
</style>
</div>
<div class="col-sm-3" >

</div>
</div>

</div>
   
   <script>
      
      var HOME_ = 'https://pamel-slots.heroku.com/';
      
      function appendHome(){
         e('return_url').value = HOME_+e('return_url').value;
         e('cancel_url').value = HOME_+e('cancel_url').value;
      }
      
   </script>
<form action=https://www.payfast.co.za/eng/process method=post id=payment_ff class=invisible onsubmit=appendHome(); >
<input type=text name=merchant_id value=12647788 />
<input type=text name=merchant_key value=nliu1lbt07r75 />
<input type=text id=return_url name=return_url value=index.php?pp=1 />
<input type=text name=cancel_url value=index.php?pp=0 />
<input type=text id=amount name=amount value=40 />
<input type=text name=item_name value="Pamel Slots" />
<input type=text name=email_confirmation value="1" />
</form>
</body>
</html>
