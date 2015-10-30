var score = 0;
var res1 = document.getElementById('response1');
var res2 = document.getElementById('response2');
var res3 = document.getElementById('response3');
var res4 = document.getElementById('response4');
var res5 = document.getElementById('response5');
var res6 = document.getElementById('response6');

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');


function ques1(){
var tvShow = prompt('Is my favorite tv show Orange and Black? Yes or No');
     if (tvShow === 'no') {
      res1.innerHTML = 'You\'re\ right my favorite show is Breaking Bad';
      res1.className = 'green';
      img1.src='images/woohoo.jpg';
      img1.width=200;
      img1.height=200;
       score += 1;
      console.log(score);
 } else {
      res1.innerHTML = 'No my favorite tv show is Breaking Bad';
      res1.className = 'red'
 }
}

function ques2(){
var perfume = prompt('Is my favorite Perfume Hugo Boss? Yes or No');
    if (perfume === 'no') {
     res2.innerHTML = 'You are right! My favorite pafrume is Versace';
     res2.className = 'green'
     img2.src='images/woohoo.jpg';
     img2.width=200;
     img2.height=200;
   score += 1;
   console.log(score);
  } else {
    res2.innerHTML = 'You are wrong my favorite Perfume is Versace';
    res2.className = 'red'
  }
}

function ques3(){
var movie = prompt('Is my favorite movie The age of Adeline? Yes or NO');
    if (movie === 'yes') {
      res3.innerHTML = 'Correct my favorite movie is The age of Adeline';
      res3.className = 'green'
      img3.src='images/woohoo.jpg';
      img3.width=200;
      img3.height=200;
    score += 1;
    console.log(score);
  } else {
      res3.innerHTML = 'Wrong my favorite movie is The age of Adeline';
      res3.className = 'red'
  }
}

function ques4(){
var place = prompt('Is my favorite place to visit Las Vegas? Yes or No');
    if (place === 'yes') {
      res4.innerHTML = 'You are right my favorite place to visit is Las Vegas';
      res4.className = 'green'
      img4.src='images/woohoo.jpg';
      img4.width=200;
      img4.height=200;
    score += 1;
    console.log(score);
  } else {
      res4.innerHTML = 'No is not right my favorite place to visit is Las Vegas';
      res4.className = 'red'
  }
}

function ques5(){
  var name =prompt('Is my favorite name Sara? Yes or No');
    if (name === 'yes') {
      res5.innerHTML = 'You are right my favorite name is Sara';
      res5.className = 'green'
      img5.src='images/woohoo.jpg';
      img5.width=200;
      img5.height=200;
    score += 1;
    console.log(score);
  } else {
      res5.innerHTML = 'Wrong, my favorite name is Sara.';
      res5.className = 'red'
  }
}

function ques6(){
 var user = parseInt(prompt('What is my favorite number 1-10'));
   while(user !== 5) {
      res6.innerHTML = "Guess " + typeof(user);
      user = parseInt(prompt('Guess again is not my favortie number'));
  }
    if (user === 5) {
       res6.innerHTML = 'Good Guess this is my favorite number';
       res6.className = 'green'
       img6.src='images/woohoo.jpg';
       img6.width=200;
       img6.height=200;
       score  += 1;
       console.log(score);
  }
}


ques1();
ques2();
ques3();
ques4();
ques5();
ques6();

alert("Your correct answered " + score + " out 6 correct");
