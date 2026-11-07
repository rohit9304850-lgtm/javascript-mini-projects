const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];

const compliments = [
  "You have a beautiful and confident personality.",
  "Your positive energy makes everyone around you feel happy.",
  "You have a naturally charming and attractive personality.",
  "You are intelligent, creative, and full of wonderful ideas.",
  "Your kindness and caring nature make you truly special.",
  "You have an amazing ability to inspire the people around you.",
  "Your confidence and determination are truly admirable.",
  "You have a warm heart and a beautiful soul.",
  "Your presence makes every place feel brighter and happier.",
  "You are naturally talented and capable of achieving great things.",
  "Your unique personality makes you unforgettable.",
  "You have a wonderful sense of humor that makes people love being around you.",
  "Your courage and strength help you overcome every challenge.",
  "You are thoughtful, understanding, and genuinely caring.",
  "Your creativity and imagination make you truly unique.",
  "You have a strong personality and a heart full of kindness.",
  "Your smile has the power to brighten someone's entire day.",
  "You are a wonderful person with endless potential.",
  "Your honesty and loyalty make you someone people can always trust.",
  "You have an incredible ability to make others feel valued and respected.",
  "Your determination shows that you can achieve anything you set your mind to.",
  "You are naturally graceful, confident, and inspiring.",
  "Your positive attitude makes difficult situations easier to handle.",
  "You have a beautiful way of seeing the best in people.",
  "Your passion and enthusiasm are truly contagious.",
  "You are stronger and more capable than you often realize.",
  "Your caring nature makes you a wonderful friend and companion.",
  "You have a unique charm that makes you stand out from everyone else.",
  "Your confidence combined with your kindness makes you truly admirable.",
  "You have the potential to accomplish something truly amazing in life.",
  "You are one of those rare people who make the world a better place simply by being yourself."
];

const victimCardCompliments = [
  "You have a special talent for making everyone feel sorry for you.",
  "Your innocent face could win any argument without saying a word.",
  "You are truly the CEO of playing the victim card.",
  "Nobody can turn a small problem into a full emotional story like you can.",
  "Your ability to make people feel guilty is honestly impressive.",
  "You could probably make the villain apologize to you.",
  "You have mastered the art of looking innocent at exactly the right moment.",
  "Your victim card has unlimited validity and apparently never expires.",
  "You can turn any situation into a story where you are the main victim.",
  "Your emotional acting skills deserve an award.",
  "You have a natural talent for making everyone think you did nothing wrong.",
  "Even when you start the argument, somehow you end up looking innocent.",
  "Your ability to collect sympathy is genuinely unmatched.",
  "You could lose an argument and still walk away with everyone's support.",
  "You have perfected the art of saying 'I didn't do anything' with complete confidence.",
  "Your innocent expression is your strongest superpower.",
  "You don't just play the victim card—you have the whole deck.",
  "You can make people apologize to you for problems you created.",
  "Your storytelling skills can turn any situation into an emotional masterpiece.",
  "Honestly, nobody plays the victim card as professionally as you do."
];

const recommendations = [
  "Believe in yourself and trust your abilities.",
  "Take some time to relax and enjoy the little things in life.",
  "Do not be afraid to step outside your comfort zone.",
  "Surround yourself with positive and supportive people.",
  "Follow your heart, but always listen to your mind too.",
  "Be patient; good things often take time.",
  "Focus on your goals and avoid unnecessary distractions.",
  "Take care of your mental and physical well-being.",
  "Learn from your mistakes instead of being afraid of them.",
  "Express your feelings instead of keeping everything inside.",
  "Be open to new experiences and opportunities.",
  "Trust the process and keep moving forward.",
  "Spend more time doing things that genuinely make you happy.",
  "Do not compare your journey with someone else's.",
  "Your hard work will eventually bring you the results you deserve.",
  "Take calculated risks when an opportunity comes your way.",
  "Keep learning new things and never stop growing.",
  "Be kind to yourself, especially during difficult times.",
  "Listen carefully before making important decisions.",
  "Do not let fear stop you from chasing your dreams.",
  "Make time for the people who truly care about you.",
  "Stay consistent, even when progress feels slow.",
  "Your intuition can guide you, so learn to trust it.",
  "Let go of things that no longer bring peace to your life.",
  "Celebrate your small achievements along the way.",
  "Think positively, but always stay realistic and practical.",
  "Use your unique talents to create something meaningful.",
  "Do not be afraid to ask for help when you need it.",
  "Keep your goals clear and take one step at a time.",
  "Believe that better days are always ahead."
];

const predictions = [
  "A new opportunity may come your way soon. Be ready to recognize it.",
  "You may soon receive some good news that brings a smile to your face.",
  "A positive change in your personal life could be closer than you think.",
  "Someone from your past may unexpectedly reconnect with you.",
  "Your hard work may soon begin to show positive results.",
  "A new friendship could develop into a meaningful connection.",
  "You may discover a hidden talent or interest that excites you.",
  "An unexpected journey or adventure may be waiting for you.",
  "The coming days may bring you a chance to start something new.",
  "You could soon experience a moment that changes your perspective on life.",
  "A difficult situation may finally begin moving in a positive direction.",
  "You may soon meet someone who has a strong influence on your future.",
  "An important decision may be approaching, so trust your instincts.",
  "Your patience may soon be rewarded with a positive outcome.",
  "A surprise opportunity could appear when you least expect it.",
  "You may soon find the motivation to achieve a goal you have been postponing.",
  "A period of personal growth and self-discovery may be coming your way.",
  "You could receive unexpected support from someone close to you.",
  "The future may bring exciting changes in your career or studies.",
  "A fresh beginning may be waiting for you—stay positive and keep moving forward."
];

const form = document.getElementById('AstroForm')
form.addEventListener('submit',(e) =>{
  e.preventDefault();
  const name = document.getElementById('name').value;
   const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value);
     const month = parseInt(document.getElementById('month').value);
      const year= parseInt(document.getElementById('year').value);

const text = `Hi ${name} ${surname}, your zodiac sign is ${zodiacSigns[month-1]}
 .${compliments[day-1]}. ${victimCardCompliments[year%20]}. ${recommendations[(day*month)%30]}. ${predictions[(name.length*surname.length)%20]}`;

 document.getElementById('result').textContent = text;

})