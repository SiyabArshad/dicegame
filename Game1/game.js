var num1=Math.floor(Math.random()*6)+1
var random1='inverted-dice-'+num1+'.png'
var player1img='/Images/'+random1
document.querySelector('#player1').setAttribute('src',player1img)
var num2=Math.floor(Math.random()*6)+1
var random2='inverted-dice-'+num2+'.png'
var player2img='/Images/'+random2
document.querySelector('#player2').setAttribute('src',player2img)
if(num1>num2)
{
    document.querySelector('#result').innerHTML='Player 1 Wins 😍'
}
else if(num1<num2)
{
    document.querySelector('#result').innerHTML='Player 2 Wins 😍'
}
else if(num1==num2)
{
    document.querySelector('#result').innerHTML='Draw 😣'
}
else{
    document.querySelector('#result').innerHTML='Some thing went wrong.'
}