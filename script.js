// script.js

// Random facts about Archimedes
const facts = [
  "Archimedes řekl 'Eureka!' když objevil zákon vztlaku.",
  "Navrhl první známý vodní šroub, předchůdce moderní pumpy.",
  "Vypočítal hodnotu π s přesností na 6 desetinných míst.",
  "Podle legendy použil zrcadla k zapálení nepřátelských lodí.",
  "Byl takový génius, že ho římský generál požádal o jeho pomoc při obléhání Syrakuz.",
  "Vyrobil první známý planetárium – model sluneční soustavy.",
  "Říkal, že " + "„díky geometrii můžeme pochopit svět“.",
];

function getRandomFact() {
  const idx = Math.floor(Math.random() * facts.length);
  return facts[idx];
}

// Set up click handler for Archimedes image
const archImg = document.getElementById('archimedes');
const factBox = document.getElementById('fact');
if (archImg && factBox) {
  archImg.addEventListener('click', () => {
    factBox.textContent = getRandomFact();
  });
}

// Show answer buttons
document.querySelectorAll('.show-answer').forEach(btn => {
  btn.addEventListener('click', () => {
    const answerText = btn.getAttribute('data-answer');
    const answerElem = btn.parentElement.querySelector('.answer');
    if (answerElem) {
      answerElem.textContent = answerText;
    }
  });
});
