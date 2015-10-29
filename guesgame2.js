var score = 0;
var birthplace = prompt('Was i born in Albania? Yes or No');
     if (birthplace === 'yes') {
     	alert('Yeahhh you are correct');
      score += 1;
 } else {
     	alert('sorry you are wrong try next time');
 }

     
var color = prompt('is my favorite color blue? Yes or No');
    if (color === 'yes') {
     alert('right');
   score += 1;
    } else {
  
    alert('You are wrong');  
}
  
var car = prompt('is my favorite car BMW?Yes or NO');
    if (car === 'yes') {
     	alert('correct my favortie car is BMW');
    score += 1;
  } else {
     	alert('Wrong');
  }

var Iphone = prompt('Do i use Iphone?Yes or No');
    if (Iphone === 'yes') {
    	alert('correct i use Iphone');
    score += 1;
 } else {
    	alert('no you are wrong I use Iphone');
 }
   
 alert("Your correct answered " + score + " out 3 correct");


