function diagnose() {
  const years = parseInt(document.getElementById("years").value) || 0;
  const global = parseInt(document.getElementById("global").value) || 0;
  const business = parseInt(document.getElementById("business").value) || 0;
  const skill = parseInt(document.getElementById("skill").value) || 0;

  let score = years + (global * 3) + (business * 2) + skill;

  let resultText = "";

  if (score >= 15) {
    resultText = "🔥 市場価値：戦略型ハイブリッド人材";
  } else if (score >= 8) {
    resultText = "⭐ 市場価値：専門特化型人材";
  } else {
    resultText = "🌱 市場価値：伸びしろ型人材";
  }

  document.getElementById("result").textContent =
    "あなたのスコアは " + score + " 点です。 " + resultText;
}