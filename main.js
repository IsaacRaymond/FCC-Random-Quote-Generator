rand = [];
randomColor = newRandomColors();
quote;
author;

$(document).ready(function() {
  setTwitterImage();
  chooseNewQuote();
});//close "ready" function

function newRandomColors(){
  rand[0] = (160 - Math.floor(Math.random()*160));
  rand[1] = (160 - Math.floor(Math.random()*160));
  rand[2] = (160 - Math.floor(Math.random()*160));

  randomColor = "rgb("+rand[0]+","+rand[1]+","+rand[2]+")";
}


function chooseNewQuote(){
  getQuoteAndAuthor();
  newRandomColors();
  setNewColors();
}


function quoteHandler(data) {
  quote = data.quoteText.trim();
  author = '-' + (data.quoteAuthor.trim() || 'Anonymous');
  document.getElementById("quote").textContent = quote;
  document.getElementById("author").textContent = author;
  $("#twitter-link").attr("href", "https://twitter.com/intent/tweet?text=" + quote + '  ' + author);
}

function getQuoteAndAuthor(){
   $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
   function(data){quoteHandler(data);});
}

function setNewColors(){
  document.body.style.backgroundColor = randomColor;
  document.getElementById("main-box").style.color = randomColor;
}

function setTwitterImage(){
  $("#twitter-image").attr("src",  "https://pbs.twimg.com/profile_images/875087697177567232/Qfy0kRIP_400x400.jpg");
}
