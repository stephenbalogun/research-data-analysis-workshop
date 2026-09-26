// Lightweight self-checking quiz interactions.
// Usage in slides (raw HTML block):
// <div class="quiz-option" onclick="checkAnswer(this, false)">A. Chi-square</div>
// <div class="quiz-option" onclick="checkAnswer(this, true)">B. Independent t-test</div>

function checkAnswer(el, isCorrect) {
  const group = el.parentElement.querySelectorAll('.quiz-option');
  group.forEach(opt => {
    opt.style.pointerEvents = 'none'; // lock after first click
  });
  el.classList.add(isCorrect ? 'correct' : 'incorrect');
  if (!isCorrect) {
    // Highlight the correct one too, if marked with data-correct
    const correctEl = el.parentElement.querySelector('[data-correct="true"]');
    if (correctEl) correctEl.classList.add('correct');
  }
  const explanation = el.closest('section').querySelector('.explanation');
  if (explanation) explanation.classList.add('shown');
}
