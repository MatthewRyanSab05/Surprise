// ===============================
// Gift Opening
// ===============================

const gift = document.getElementById("giftBox");
const main = document.getElementById("mainContent");
const intro = document.getElementById("intro");

gift.onclick = () => {
  gift.style.transform = "scale(12)";
  gift.style.opacity = "0";

  setTimeout(() => {
    intro.style.opacity = "0";
  }, 600);

  setTimeout(() => {
    intro.style.display = "none";
    main.style.display = "block";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 1500);
};

// ===============================
// Photo Gallery
// ===============================

const photos = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

const container = document.getElementById("photoContainer");

const widths = ["100%", "96%", "92%", "98%"];

photos.forEach((photo, index) => {
  const card = document.createElement("div");

  card.className = "polaroid";

  const rotation = Math.random() * 8 - 4;

  card.style.setProperty("--rotation", rotation + "deg");

  card.style.transform = `rotate(${rotation}deg)`;

  card.style.animationDelay = `${Math.random() * 3}s`;

  card.style.width = widths[Math.floor(Math.random() * widths.length)];

  card.innerHTML = `
        <img src="photos/${photo}" alt="Memory ${index + 1}">
        <p>💛</p>
    `;

  container.appendChild(card);
});

// ===============================
// Letter Typewriter
// ===============================

const button = document.getElementById("openLetter");
const letterSection = document.getElementById("letterSection");
const output = document.getElementById("typedLetter");
const envelope = document.getElementById("envelope");

const text = `

It's been a month! Yeyyy

It's crazy to think na it all started with a single aya, 
never would've thought na we would click, 
never would've thought I would come to like and love you this fast.

I really love the way you talk, 
the way you view life, 
the way you handle things, 
your quirkiness and weirdness, 
your eyes when you look at me, 
to put it simply, I love you for being you.

Everytime we are together, 
I genuinely feel happy and at peace, 
something I have not felt and have been faking for a while. 
You brought me my old happy self who's willing to do what it takes to make a person happy, 
and that's you baby. 

I hope I continue to make you happy and to always be there for when you need it, 
even in your hardest times, even while im in mine. 
I may not be the perfect man for you, 
but I strive to be the person deserving of you 
and will always, always try to keep it that way.

I promise to make you happy,
I promise to always make you feel loved, and
I promise to stay loyal to you

I love you to the moon and back, my sweetest and cutest Kylie.

        - From your IT nerd

`;

button.onclick = () => {
  // Hide the button
  button.style.display = "none";

  // Hide the envelope
  envelope.style.display = "none";

  // Show the letter
  letterSection.style.display = "flex";

  // Scroll to the letter
  letterSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  // Clear previous text
  output.innerHTML = "";

  let i = 0;

  function type() {
    if (i < text.length) {
      output.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }

  // Start typing after scrolling
  setTimeout(type, 800);
};

// ===============================
// Sparkles
// ===============================

const sparkleContainer = document.getElementById("sparkles");

for (let i = 0; i < 70; i++) {
  const sparkle = document.createElement("div");

  sparkle.className = "sparkle";

  sparkle.style.left = Math.random() * 100 + "vw";

  sparkle.style.animationDelay = Math.random() * 8 + "s";

  sparkle.style.animationDuration = 6 + Math.random() * 6 + "s";

  sparkleContainer.appendChild(sparkle);
}

// ===============================
// Flowers
// ===============================

const flowerContainer = document.getElementById("flowers");

const flowers = ["🌼", "🌸", "🌻", "✨"];

for (let i = 0; i < 35; i++) {
  const flower = document.createElement("div");

  flower.className = "flower";

  flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left = Math.random() * 100 + "vw";

  flower.style.animationDuration = 12 + Math.random() * 10 + "s";

  flower.style.animationDelay = Math.random() * 10 + "s";

  flowerContainer.appendChild(flower);
}

// ===============================
// Capybara Speech Bubble
// ===============================

const speech = document.getElementById("speech");

const messages = [
  "Hi Babyyy",
  "Surpriseeeee",
  "Made this for u",
  "Look at the photos we're in together!",
  "Someone loves you very much (ako) 💛",
  "Open the letter babyy!",
];

let messageIndex = 0;

speech.style.opacity = "1";

speech.innerHTML = messages[0];

setInterval(() => {
  messageIndex++;

  if (messageIndex >= messages.length) {
    messageIndex = 0;
  }

  speech.style.opacity = "0";

  setTimeout(() => {
    speech.innerHTML = messages[messageIndex];

    speech.style.opacity = "1";
  }, 300);
}, 4000);
