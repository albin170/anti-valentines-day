let rageLevel = 0;

function sound(id) {
  document.getElementById(id).play();
}

function crash() {
  sound("boom");
  document.body.style.filter = "hue-rotate(180deg)";
  alert("💥 Valentine.exe destroyed successfully");
}

function quiz() {
  sound("pop");
  const answers = [
    "Single because standards 📈",
    "Emotionally unavailable by choice 😎",
    "Too smart for drama 🧠",
    "Avoiding character development"
  ];
  quizResult.innerText =
    answers[Math.floor(Math.random() * answers.length)];
}

function singleMeter() {
  sound("pop");
  const percent = Math.floor(Math.random() * 40) + 60;
  singleResult.innerText =
    `You are ${percent}% single. Remaining % is self-respect.`;
}

function mobileJoke() {
  sound("pop");
  if (window.innerWidth > 768) {
    mobileResult.innerText =
      "❌ Please open on phone for emotional damage.";
  } else {
    mobileResult.innerText =
      "📱 Couples arguing. You scrolling peacefully.";
  }
}

function rage() {
  rageLevel++;
  rageCount.innerText = rageLevel;
  sound("pop");

  if (rageLevel === 10) {
    confetti();
    alert("🧨 MAX RAGE ACHIEVED. CONFETTI UNLOCKED.");
  }
}

function receipt() {
  sound("pop");
  const id = Math.floor(Math.random() * 99999);
  receiptBox.textContent = `
BREAKUP RECEIPT
---------------
Order ID: #${id}
Item: Emotional Peace
Price: ₹0
Tax: Tears Saved
Status: REFUNDED

Thank you for not dating.
`;
}

function share() {
  sound("pop");
  const lines = [
    "Valentine’s Day cancelled due to self-respect.",
    "Still single. Still undefeated.",
    "Love is temporary. Sleep is permanent.",
    "Avoided relationship. Achievement unlocked."
  ];
  shareText.innerText =
    lines[Math.floor(Math.random() * lines.length)];
}

function confetti() {
  for (let i = 0; i < 50; i++) {
    const c = document.createElement("span");
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-10px";
    document.getElementById("confetti").appendChild(c);
    setTimeout(() => c.remove(), 2000);
  }
}
