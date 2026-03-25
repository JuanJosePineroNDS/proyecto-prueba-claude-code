const STORAGE_KEY = 'visit_count';

const counterEl = document.getElementById('counter');
const resetBtn  = document.getElementById('resetBtn');

function getCount() {
  return parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
}

function setCount(n) {
  localStorage.setItem(STORAGE_KEY, n);
  counterEl.textContent = n;
  // bump animation
  counterEl.classList.remove('bump');
  void counterEl.offsetWidth; // reflow
  counterEl.classList.add('bump');
}

// Increment on each page load
setCount(getCount() + 1);

resetBtn.addEventListener('click', () => {
  setCount(0);
});
