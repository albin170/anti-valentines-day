let rageLevel = 0;

function crash() {
  document.body.style.filter = "hue-rotate(180deg)";
  alert("💥 Valentine.exe crashed successfully");
}

function simulate() {
  const results = [
    "Went well until expectations appeared.",
    "Started cute, ended with bill splitting.",
    "Romantic until phone battery died.",
    "Cancelled due to common sense."
  ];
  simResult.innerText =
    results[Math.floor(Math.random() * results.length)];
}

function bill() {
  const amount = Math.floor(Math.random() * 5000) + 1000;
  billResult.innerText =
    `₹${amount} spent. Happiness lasted 2 hours.`;
}

function mood() {
  const moods = [
    "Single 😌",
    "Hungry 🍕",
    "Unbothered 😎",
    "Avoiding Instagram 🙃"
  ];
  moodResult.innerText =
    moods[Math.floor(Math.random() * moods.length)];
}

function rage() {
  rageLevel++;
  rageCount.innerText = rageLevel;
  if (rageLevel % 5 === 0) {
    alert("🔥 Calm down. Buy snacks.");
  }
}

function truth() {
  const truths = [
    "Valentine’s Day is peer pressure.",
    "Love is real. The day is fake.",
    "Couples are broke today.",
    "You’re not lonely. You’re free."
  ];
  truthResult.innerText =
    truths[Math.floor(Math.random() * truths.length)];
}
