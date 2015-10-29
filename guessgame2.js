var score = 0;
var tvShow = prompt('Is my favorite tv show Orange and Black? Yes or No');
     if (tvShow === 'yes') {
     	alert('No my favorite tv show is Breaking Bad');
      score += 1;
 } else {
     	alert('You\'re\ right my favorite show is Breaking Bad');
 }

var perfume = prompt('Is my favorite Perfume Hugo Boss? Yes or No');
    if (perfume === 'yes') {
     alert('No my favorite pafrume is Versace');
   score += 1;
  } else {
  
    alert('You are wrong my favorite Perfume is Versace');  
  }
  
var movie = prompt('Is my favorite movie The age of Adeline? Yes or NO');
    if (movie === 'yes') {
     	alert('Correct my favorite movie is The age of Adeline');
    score += 1;
  } else {
     	alert('Wrong my favorite movie is The age of Adeline');
  }

var place = prompt('Is my favorite place to visit Las Vegas? Yes or No');
    if (place === 'yes') {
    	alert('You are right my favorite place to visit is Las Vegas');
    score += 1;
  } else {
    	alert('No is not right my favorite place to visit is Las Vegas');
  }
  var name =prompt('Is my favorite name Sara? Yes or No');
    if (name === 'yes') {
      alert('You are right my favorite name is Sara');
    score += 1;
  } else {
      alert('Wrong, my favorite name is Sara.');
  }

 var user = parseInt(prompt('What is my favorite number 1-10'));
   while(user !== 5) {
      alert("Guess " + typeof(user));
      user = parseInt(prompt('Guess again is not my favortie number'));
  }
    if (user === 5) {
       alert('Good Guess this is my favorite number');
       score  += 1;
  }


 alert("Your correct answered " + score + " out 5 correct");

