//Player 1
//create random number between 1 to 6
var randomNum1=Math.floor(Math.random() * 6) + 1;
//mapping random to image in folder
var randomImage1="dice" +randomNum1+ ".jpg";
var img1 = document.querySelectorAll("img")[0];//player 1 image
img1.setAttribute("src",randomImage1);

//Player 2
var randomNum2=Math.floor(Math.random() * 6) + 1;
//mapping random to image in folder
var randomImage2="dice" +randomNum2+ ".jpg";
var img2 = document.querySelectorAll("img")[1];//player 2 image
img2.setAttribute("src",randomImage2);

//Player 3
var randomNum3=Math.floor(Math.random() * 6) + 1;
//mapping random to image in folder
var randomImage3="dice" +randomNum3+ ".jpg";
var img3 = document.querySelectorAll("img")[2];//player 2 image
img3.setAttribute("src",randomImage3);

//Player 4
var randomNum4=Math.floor(Math.random() * 6) + 1;
//mapping random to image in folder
var randomImage4="dice" +randomNum4+ ".jpg";
var img4 = document.querySelectorAll("img")[3];//player 2 image
img4.setAttribute("src",randomImage4);

if(randomNum1>randomNum2 && randomNum1>randomNum3 && randomNum1>randomImage4)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
    document.querySelector("input").innerHTML="Wins!"
}
else if(randomNum2>randomNum1 && randomNum2>randomNum3 && randomNum2>randomNum4)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else if(randomNum3>randomNum1 && randomNum3>randomNum2 && randomNum3>randomNum4)
{
    document.querySelector("h1").innerHTML="Player 3 Wins!";
}
else if(randomNum4>randomNum1 && randomNum4>randomNum2 && randomNum4>randomNum3)
{
    document.querySelector("h1").innerHTML="Player 4 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draws";
}
//how many  time play dice game 
const button=document.querySelector('.rs');

button.addEventListener('click',(e)=>
{
    console.log('click');
    e.preventDefault();
});