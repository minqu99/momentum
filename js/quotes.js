const quotes = [
  {
    quote:
      "When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
    author: "Walt Disney",
  },
  {
    quote:
      "Never say goodbye because goodbye means going away and going away means forgetting.",
    author: "Peter Pan",
  },
  {
    quote:
      "The flower that blooms in adversity is the most rare and beautiful of all.",
    author: "Mulan",
  },
  {
    quote:
      "You cannot be happy every day. But there are happy things every day.",
    author: "Winnie the Pooh",
  },
  {
    quote: "Venture outside your comfort zone. The rewards are worth it.",
    author: "Rapunzel",
  },
  {
    quote: "Today’s special moments are tomorrow’s memories.",
    author: "Aladdin",
  },
  { quote: "Anyone can be anything.", author: "Zootopia" },
  {
    quote:
      "But the thing that makes Woody special is he will never give up on you, ever",
    author: "Toy Story",
  },
  { quote: "To me, you are perfect.", author: "Love actually" },
  {
    quote:
      "I'm youth, I'm joy, I'm a little bird that has broken out of the egg.",
    author: "James M. Barrie",
  },
  {
    quote:
      "The best thing about the future is that it comes one day at a time.",
    author: "Abraham Lincoin",
  },
  { quote: "The best moment suddenly comes.", author: "Finding nemo" },
  //   { quote: "", author: "" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // random()은 0-1 숫자를 얻을 수 있다(float형태)

// Math.round() // 반올림
// Math.ceil() // 올림
// Math.floor() // 내림

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
