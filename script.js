document.querySelectorAll('.question ul').forEach(ul => {
  const options = ul.querySelectorAll('li');
  options.forEach(option => {
    option.addEventListener('click', () => {
      // Disable all options
      options.forEach(o => o.style.pointerEvents = "none");

      const isCorrect = option.getAttribute('data-correct') === 'true';
      option.classList.add(isCorrect ? 'correct' : 'incorrect');
    });
  });
});
