function showPopup(country) {
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popupText');

  const messages = {
    us: "🇺🇸 USA: Learn your rights, stay safe during protests.",
    india: "🐅 India: Support local activism and mental health resources.",
    china: "🐼 China: Awareness of human rights and safe reporting.",
    australia: "🦘 Australia: How to protest safely and understand your rights."
  };

  popupText.textContent = messages[country] || "Information not available.";
  popup.style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Color Picker
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', function() {
  switch(this.value) {
    case 'default':
      document.body.style.backgroundColor = '#fefefe';
      document.body.style.color = '#333';
      break;
    case 'pastel':
      document.body.style.backgroundColor = '#fbe4e4';
      document.body.style.color = '#333';
      break;
    case 'hotpink':
      document.body.style.backgroundColor = '#ff69b4';
      document.body.style.color = '#fff';
      break;
    case 'babyblue':
      document.body.style.backgroundColor = '#add8e6';
      document.body.style.color = '#333';
      break;
    case 'yellow':
      document.body.style.backgroundColor = '#fffacd';
      document.body.style.color = '#333';
      break;
  }
});
