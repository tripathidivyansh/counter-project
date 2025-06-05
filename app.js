(function () {
  const counterDisplay = document.getElementById('counter');
  const buttons = document.querySelectorAll('.counterBtn');
  let count = 0;
  let interval = null;

  function updateCounter() {
    counterDisplay.textContent = count;
    if (count > 0) {
      counterDisplay.style.color = 'green';
    } else if (count < 0) {
      counterDisplay.style.color = 'red';
    } else {
      counterDisplay.style.color = '#333';
    }
  }

  buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
      if (interval !== null) return; // Prevent multiple intervals

      if (button.classList.contains('prevBtn')) {
        interval = setInterval(() => {
          count--;
          updateCounter();
        }, 100);
      } else if (button.classList.contains('nextBtn')) {
        interval = setInterval(() => {
          count++;
          updateCounter();
        }, 100);
      }
    });

    // Stop incrementing/decrementing on mouseup or mouseleave
    ['mouseup', 'mouseleave'].forEach(evt => {
      button.addEventListener(evt, () => {
        clearInterval(interval);
        interval = null;
      });
    });
  });

  // Also stop on mouseup anywhere on the window
  window.addEventListener('mouseup', () => {
    clearInterval(interval);
    interval = null;
  });
})();
