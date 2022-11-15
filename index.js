const colourInput = document.getElementById('colour-input');
const modeInput = document.getElementById('mode-list');
const btn = document.getElementById('btn');
const count = 5;
const resultEl = document.getElementById('results');

btn.addEventListener('click', () => {
  const mode = modeInput.value;
  const hex = colourInput.value.replace('#', '');
  console.log(`hex: ${hex}, mode: ${mode}`);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count${count}`
  )
    .then((res) => res.json())
    .then((data) => {
      const cols = data.colors;
      console.log(cols);
      render(cols);
    });
});

function render(cols) {
  const colResults = cols
    .map((col) => {
      const hexCol = col.hex.value;

      return `
    <div style="background-color: ${hexCol}" class="output-color">
    <span class="output-hex">${hexCol}</span>
</div>
        `;
    })
    .join('');

  resultEl.innerHTML = colResults;
}
