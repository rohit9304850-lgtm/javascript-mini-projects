
const quotes = [
    "Honesty is the best policy.",
    "Believe in yourself.",
    "Never give up.",
    "Dream big and work hard.",
    "Success is the result of hard work.",
    "Be the change you wish to see.",
    "Knowledge is power.",
    "Practice makes a man perfect.",
    "Time is money.",
    "Every day is a new beginning.",
    "Do good and good will come to you.",
    "Stay positive and work hard.",
    "Your only limit is your mind.",
    "Failure is the key to success.",
    "Actions speak louder than words.",
    "Where there is a will, there is a way.",
    "Keep learning and keep growing.",
    "Believe you can and you are halfway there.",
    "Work hard in silence.",
    "Make every moment count."
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];
});
