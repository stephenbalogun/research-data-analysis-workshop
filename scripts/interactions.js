// Self-checking quiz interactions (for any manually-added quiz-option buttons)
function checkAnswer(el, isCorrect) {
  const group = el.parentElement.querySelectorAll('.quiz-option');
  group.forEach(opt => { opt.style.pointerEvents = 'none'; });
  el.classList.add(isCorrect ? 'correct' : 'incorrect');
  if (!isCorrect) {
    const correctEl = el.parentElement.querySelector('[data-correct="true"]');
    if (correctEl) correctEl.classList.add('correct');
  }
}

// Animated count-up for the "742 rows" opening stat
function runCountUp(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1400;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.Reveal) {
    Reveal.on('slidechanged', event => {
      const counters = event.currentSlide.querySelectorAll('.count-up');
      counters.forEach(c => { if (c.textContent === '0') runCountUp(c); });
    });
  }
});
