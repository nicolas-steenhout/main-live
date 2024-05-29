// get get radio buttons
const radioButtons = document.querySelectorAll('input[name="theme"]');

// function: change color-scheme
function changeTheme(e) {
  if (this.checked) {
    document.documentElement.style.setProperty("color-scheme", this.id);
    return;
  }
}

// add event listeners to buttons
for (const radioButton of radioButtons) {
  radioButton.addEventListener('change', changeTheme);
}
  