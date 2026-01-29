// ====== Chat functionality ======
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatLog = document.getElementById('chatLog');

sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message !== "") {
        const msgDiv = document.createElement('div');
        msgDiv.textContent = "You: " + message;
        chatLog.appendChild(msgDiv);
        chatInput.value = "";
        chatLog.scrollTop = chatLog.scrollHeight;
    }
});

// ====== Mini-stories ======
const storyBtns = document.querySelectorAll('.storyBtn');
const storyOutput = document.getElementById('storyOutput');

storyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const storyDiv = document.createElement('div');
        storyDiv.textContent = btn.dataset.story;
        storyOutput.appendChild(storyDiv);
    });
});

// ====== Color picker ======
const colorPicker = document.getElementById('colorPicker');
document.body.style.backgroundColor = colorPicker.value;

colorPicker.addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value;
});

// ====== Floating sparkles ======
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 300);

// ====== Interactive chibis ======
const chibis = document.querySelectorAll('.chibi');

chibis.forEach(chibi => {
    chibi.addEventListener('click', () => {
        // Move chibi to a random spot on click
        chibi.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        chibi.style.top = Math.random() * (window.innerHeight - 200) + 'px';
    });
});
