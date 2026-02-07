let rageLevel = 0;

function crash() {
  document.body.style.filter = "hue-rotate(180deg)";
  alert("💥 Valentine.exe destroyed successfully");
}

function quiz() {
  const answers = [
    "Single because standards 📈",
    "Too smart for drama 🧠",
    "Emotionally unavailable by choice 😎",
    "Avoiding character development"
  ];
  document.getElementById("quizResult").innerText =
    answers[Math.floor(Math.random() * answers.length)];
}

function singleMeter() {
  const percent = Math.floor(Math.random() * 40) + 60;
  document.getElementById("singleResult").innerText =
    `You are ${percent}% single. Remaining % is self-respect.`;
}

function mobileJoke() {
  const msg =
    window.innerWidth > 768
      ? "❌ Open on phone for maximum emotional damage."
      : "📱 Couples arguing. You scrolling peacefully.";
  document.getElementById("mobileResult").innerText = msg;
}

function rage() {
  rageLevel++;
  document.getElementById("rageCount").innerText = rageLevel;

  if (rageLevel === 10) {
    confetti();
    alert("🧨 MAX RAGE ACHIEVED");
  }
}

function receipt() {
  const id = Math.floor(Math.random() * 99999);
  document.getElementById("receiptBox").textContent = `
BREAKUP RECEIPT
--------------
Order ID: #${id}
Item: Mental Peace
Cost: ₹0
Tax: Saved Tears
Status: REFUNDED

Thank you for staying single.
`;
}

function share() {
  const lines = [
    "Valentine cancelled due to self-respect.",
    "Still single. Still undefeated.",
    "Love is temporary. Sleep is permanent.",
    "Avoided relationship. Achievement unlocked."
  ];
  document.getElementById("shareText").innerText =
    lines[Math.floor(Math.random() * lines.length)];
}

function confetti() {
  const box = document.getElementById("confetti");
  for (let i = 0; i < 40; i++) {
    const c = document.createElement("span");
    c.style.left = Math.random() * 100 + "vw";
    box.appendChild(c);
    setTimeout(() => c.remove(), 2000);
  }
}
