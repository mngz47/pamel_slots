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

function auto_play_p(){
  
    play_p();
    track_action();
}

var auto_play_id = 0;

function auto_play_p_init(){
 var auto_play_id = setInterval(auto_play_p,4000);
}

function auto_play_p_stop(){
  clearInterval(auto_play_id);
}


function setGType(g_type){
setCookie("g_type",g_type , 30);
}


function play_p(){

var g_type = -1;
   if(getCookie("g_type")){
g_type = getCookie("g_type");
   }
   
   if(g_type!=-1){

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

auto_play_p_stop();
  
   var name = prompt('You have WON! Enter name for further details.');
   var country = prompt('Enter country.');
   var email = prompt('Enter email.');

    writeUserData(userId, name, country, email, g_type);
   
}else{
//alert('Try Again');
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

function getAmount(vv){
return (vv=='houses'?100:(vv=='cars'?50:(vv=='fruits'?25:5)));
}

if(getCookie("g_type")){
  cost = getAmount(getCookie("g_type"));
}
