let rageCount = 0;
let heartsOn = false;
let music = new Audio("https://www.myinstants.com/media/sounds/emotional-damage.mp3");

function rage() {
  rageCount++;
  document.getElementById("rageCount").innerText = rageCount;
}

function singleTest() {
  const levels = [
    "💀 Forever Single",
    "😂 Single Pro Max",
    "😐 Still Hopeful",
    "🤡 Situationship Victim",
    "❤️ Oops… taken"
  ];
  document.getElementById("singleResult").innerText =
    levels[Math.floor(Math.random() * levels.length)];
}

function chat() {
  const replies = [
    "Love detected. Initiating cringe mode 🤡",
    "Go drink water. Stop texting your ex.",
    "Valentine’s Day is just capitalism.",
    "Flowers die. Pizza stays.",
    "Romance.exe has stopped working."
  ];
  document.getElementById("botReply").innerText =
    replies[Math.floor(Math.random() * replies.length)];
}

function breakup() {
  const letters = [
    "It’s not me, it’s definitely you.",
    "I need space… for my peace.",
    "My Wi-Fi connects better than us.",
    "Let’s stay strangers.",
    "I deserve better, even Netflix agrees."
  ];
  document.getElementById("letter").innerText =
    letters[Math.floor(Math.random() * letters.length)];
}

function joke() {
  const jokes = [
    "Love is blind. Marriage is eye-opening.",
    "Valentine’s Day: when single people suffer.",
    "Roses are red, violets are blue, love is a lie, pizza is true.",
    "Cupid needs glasses.",
    "Relationships are just unpaid internships."
  ];
  document.getElementById("jokeText").innerText =
    jokes[Math.floor(Math.random() * jokes.length)];
}

function toggleHearts() {
  heartsOn = !heartsOn;
  if (heartsOn) {
    heartInterval = setInterval(createHeart, 300);
  } else {
    clearInterval(heartInterval);
    document.querySelectorAll(".heart").forEach(h => h.remove());
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💔";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

function playMusic() {
  music.play();
}
