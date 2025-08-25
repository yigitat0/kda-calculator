
function calculate() {
  const kills = parseInt(document.getElementById('kills').value) || 0;
  const deaths = parseInt(document.getElementById('deaths').value) || 0;
  const assists = parseInt(document.getElementById('assists').value) || 0;

  const kda = deaths === 0 ? Infinity : (kills + assists) / deaths;
  document.getElementById('kda').innerText = kda === Infinity ? '-' : kda.toFixed(2);
}

function toggleTheme() {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
}

const kda = (kills + assists) / deaths;
let feedbackIcon = '';
let feedbackAlt = '';

resultBox.innerHTML = `
  <div class="kda-result">
    <span>KDA: ${kda.toFixed(2)}</span>
    <img src="images/${feedbackIcon}" alt="${feedbackAlt}" class="kda-icon">
  </div>
`;


window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
  }
  calculate();
});
