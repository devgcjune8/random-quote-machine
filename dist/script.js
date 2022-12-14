// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.
const QUOTESTORAGE = [{
  quote: "I'm very bad at ending sentences. A lot times I just want to say, 'That's the end of my sentence. I have nothing more to say.",
  author: "Nathan Fielder" },

{
  quote: "I used to trade stocks online, and I kind of felt gross, like, all I'm doing is making money off other people's creativity, and I'm not creating anything myself.",
  author: "Nathan Fielder" },

{
  quote: "I just don't have this magnetic personality that everyone is drawn to. I don't make friends easily... I'm just not one of those people.",
  author: "Nathan Fielder" },

{
  quote: "I'm not into things that feel like a sequel. There's just something magical about when something happens for the first time.",
  author: "Nathan Fielder" },

{
  quote: "I agree that someone falling down is really funny, and I can go on YouTube and watch people falling. It makes me laugh.",
  author: "Nathan Fielder" },

{
  quote: "In my personal life, I will do whatever it takes to make a situation comfortable if I sense - if I'm talking to someone [and] I sense there's a silence, I'll try to fill that gap. It makes me very anxious when things get uncomfortable.",
  author: "Nathan Fielder" },

{
  quote: "Everyone???s default state is this pleasantry state. My goal in the show is to undercut that as quickly as possible. If you really do let it sit, it???s sometimes amazing what comes out of people.",
  author: "Nathan Fielder" },

{
  quote: " Electromagnetic pulse technology, of course I am, Mr. President. If a terrorist would launch an EMP attack on this country and take out our power grid we would send us back... they would send us back to horse-and-buggy-times!",
  author: "Jack Decker" },

{
  quote: "A lot of movies aren't intended for everybody.",
  author: "Tim Heidecker" },

{
  quote: "People are rude in general.",
  author: "Eric Wareheim" },

{
  quote: "Well, you know, I don't think anyone who writes a television series has a master plan from the beginning, and knows all the character traits, and everything that's going to happen.",
  author: "Charlie Day" },

{
  quote: "Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
  author: "Alan Turing" },

{
  quote: "Science is a differential equation. Religion is a boundary condition.",
  author: "Alan Turing" },

{
  quote: "Programming is a skill best acquired by practice and example rather than from books.",
  author: "Alan Turing" },

{
  quote: "Intelligence is the ability to avoid doing work, yet getting the work done",
  author: "Linus Trovalds" },

{
  quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
  author: "Linus Trovalds" },

{
  quote: "Theory and practice sometimes clash. And when that happens, theory loses. Every single time.",
  author: "Linus Trovalds" },

{
  quote: "Errors using inadequate data are much less than those using no data at all.",
  author: "Charles Babbage" },

{
  quote: "All of a sudden, we've lost a lot of control, We can't turn off our internet; we can't turn off our smartphones; we can't turn off our computers. You used to ask a smart person a question. Now, who do you ask? It starts with g-o, and it's not God???",
  author: "Steve Wozniak" },

{
  quote: "Never trust a computer you can't throw out a window.",
  author: "Steve Wozniak" },

{
  quote: "The past was the worst!",
  author: "Simon Whistler" },

{
  quote: "Music is the wine that fills the cup of silence.",
  author: "Robert Fripp" },

{
  quote: "Beginner's luck is great for beginners.",
  author: "Robert Fripp" },

{
  quote: "Discipline is never an end in itself, only a means to an end.",
  author: "Robert Fripp" },

{
  quote: "I went to a bookstore and asked the saleswoman, 'Where's the self-help section?' She said if she told me, it would defeat the purpose.",
  author: "George Carlin" },

{
  quote: "History is made by active, determined minorities, not by the majority, which seldom has a clear and consistent idea of what it really wants.",
  author: "Theodore Kacynski" },

{
  quote: "It is during our darkest moments that we must focus to see the light.",
  author: "Aristotle" },

{
  quote: "I can accept failure, everyone fails at something. But I can't accept not trying.",
  author: "Michael Jordan" },

{
  quote: "I never looked at the consequences of missing a big shot??? When you think about the consequences you will always think of the negative result",
  author: "Michael Jordan" },

{
  quote: "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
  author: "Michael Jordan" },

{
  quote: "Learning's a gift, even when pain is your teacher.",
  author: "Michael Jordan" },

{
  quote: "????Something is REAL ???? ???? ???? ???????? going on",
  author: "LeBron James" },

{
  quote: "I was successful materially, but I know life is much more than worldly success. I saw all these blessings God had given me. The way to give thanks is obedience to God.",
  author: "Hakeem Olajuwon" },

{
  quote: "Another Day, Another Opportunity????????????",
  author: "Trae Young" },

{
  quote: "Usually people think that it is the musicians who create the music, but in fact it is music who creates the musicians.",
  author: "Robert Fripp" },

{
  quote: "If the audience doesn't hear what is going on, is it going on?",
  author: "Robert Fripp" },

{
  quote: "Sometimes people don't want to hear the truth because they don't want their illusions destroyed.",
  author: " Friedrich Nietzsche" },

{
  quote: "I was in darkness, but I took three steps and found myself in paradise. The first step was a good thought, the second, a good word; and the third, a good deed.",
  author: "Friedrich Nietzsche" },

{
  quote: "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
  author: "Friedrich Nietzsche" },

{
  quote: "Those who are devoid of purpose will make the void their purpose.",
  author: "Friedrich Nietzsche" },

{
  quote: "You can have results or excuses. Not both.",
  author: "Arnold Schwarzenegger" },

{
  quote: "Confidence comes from victory, but strength comes from the struggle.",
  author: "Arnold Schwarzenegger" },

{
  quote: "In real open source, you have the right to control your own destiny.",
  author: "Linus Trovalds" },

{
  quote: "Happiness can exist only in acceptance",
  author: "George Orwell" },

{
  quote: "The beginning is the most important part of the work",
  author: "Plato" },

{
  quote: "He who does not know how to look back at where he came from will never get to his destination.",
  author: "Jose Rizal" },

{
  quote: "The only way to learn a new programming language is by writing programs in it.",
  author: "Dennis Ritchie" }];



let colors = ["#2b70e0", "#312be0", "#085a75", "#750865", "#750865", "#4a4349", "#aeba09", "#075e56", "#400904", "#121340", "#15a197", "#c1c70e", "#ed24cc", "#ed1576", "#1561ed", "#0d3073", "#0d734a", "#011c11", "#1c1101", "#213837"];

let quoteText = document.querySelector('#quote-text');
let quoteAuthor = document.querySelector('#quote-author');
let shareTweet = document.querySelector('#tweet-quote');

function randomQuotes() {
  let rI = Math.floor(Math.random() * QUOTESTORAGE.length);
  quoteText.innerText = QUOTESTORAGE[rI].quote;
  quoteAuthor.innerText = QUOTESTORAGE[rI].author;
}
randomQuotes();

const btn = document.querySelector('#new-quote');
const quoteBox = document.querySelector('#quote-box');

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  quoteBox.style.color = colors[randomNumber];
  quoteBox.style.borderColor = colors[randomNumber];
  quoteBox;
  btn.style.borderColor = colors[randomNumber];
  btn.style.color = colors[randomNumber];
  document.querySelector(".fa-twitter").style.color = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}


let currentQuote = $('#quote-text').text();
let currentAuthor = $('#quote-author').text();

$('#tweet-quote').attr(
'href',
'https://twitter.com/intent/tweet?hashtags=daily+ramblings&text=' +
encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));


function anim() {
  quoteText.classList.add("entrance");
  quoteAuthor.classList.add("entrance");

  //This function runs when the CSS animation is completed
  let listener = quoteText.addEventListener('animationend', function () {
    quoteText.classList.remove("entrance");


    //this removes the listener after it runs so that it doesn't get re-added every time the button is clicked
    quoteText.removeEventListener('animationend', listener);
  });
  let listener2 = quoteAuthor.addEventListener('animationend', function () {
    quoteAuthor.classList.remove("entrance");


    //this removes the listener after it runs so that it doesn't get re-added every time the button is clicked
    quoteAuthor.removeEventListener('animationend', listener2);
  });
}