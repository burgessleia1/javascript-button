const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");
const rgbDisplay = document.getElementById("rgbDisplay");
const counterBtn = document.getElementById("counterBtn");
const clicks = document.getElementById("clicks");

let count = 0;
let intervalId = null;

// Update background and RGB display
function updateColor() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  const rgb = `rgb(${r},${g},${b})`;

  rgbDisplay.textContent = rgb;
  document.body.style.backgroundColor = rgb;
}

// Event listeners for sliders
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

// Button click
counterBtn.addEventListener("click", () => {
  count++;
  clicks.textContent = count;
});

// Click and hold support
counterBtn.addEventListener("mousedown", () => {
  intervalId = setInterval(() => {
    count++;
    clicks.textContent = count;
  }, 100);
});

document.addEventListener("mouseup", () => {
  clearInterval(intervalId);
});

