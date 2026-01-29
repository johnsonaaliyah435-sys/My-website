/* Default Theme */
:root {
  --main-bg: #fdf6f0;
  --main-color: #333;
  --header-color: #ff69b4;
  --button-bg: #ff69b4;
}

body {
  font-family: Arial, sans-serif;
  background-color: var(--main-bg);
  color: var(--main-color);
  text-align: center;
  padding: 20px;
}

header h1 {
  color: var(--header-color);
}

button {
  padding: 10px 20px;
  margin: 5px;
  background-color: var(--button-bg);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

section {
  margin: 30px 0;
}

.post {
  background-color: #fff0f5;
  border: 2px solid #ff69b4;
  border-radius: 10px;
  padding: 15px;
  margin: 10px auto;
  width: 80%;
  cursor: pointer;
  transition: transform 0.2s;
}

.post:hover {
  transform: scale(1.03);
}

/* Pop-up */
.popup {
  display: none;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  background-color: #fff9c4;
  border: 2px solid #ff69b4;
  border-radius: 12px;
  padding: 20px;
  z-index: 1000;
}

#popup button {
  margin-top: 10px;
}

/* Themes */
body.pastel {
  --main-bg: #fef6ff;
  --main-color: #333;
  --header-color: #f7b2e5;
  --button-bg: #f7b2e5;
}

body.hotpink {
  --main-bg: #ffe6f0;
  --main-color: #333;
  --header-color: #ff1493;
  --button-bg: #ff1493;
}

body.babyblue {
  --main-bg: #e0f7ff;
  --main-color: #333;
  --header-color: #00bfff;
  --button-bg: #00bfff;
}

body.yellow {
  --main-bg: #fff9e6;
  --main-color: #333;
  --header-color: #ffdd57;
  --button-bg: #ffdd57;
}

