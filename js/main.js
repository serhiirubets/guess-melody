const Keycode = {
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
};

const template = document.querySelector(`template`);
const markup = template.content.cloneNode(true);
const screens = markup.querySelectorAll(`.main`);
const container = document.querySelector(`.main`);
const lastScreenIndex = screens.length;

let currentScreenIndex = 0;

const showScreen = (index) => {
  container.innerHTML = ``;
  container.appendChild(screens[index]);
};

const setCurrentScreenIndex = (next) => {
  const previousScreenIndex = currentScreenIndex;

  if (next) {
    currentScreenIndex++;
  } else {
    currentScreenIndex--;
  }

  if (currentScreenIndex < 0 || currentScreenIndex >= lastScreenIndex) {
    currentScreenIndex = previousScreenIndex;
    return currentScreenIndex;
  }

  return currentScreenIndex;
};


const documentKeydownHandler = (evt) => {
  if (!evt.altKey) {
    return;
  }

  if (evt.keyCode === Keycode.ARROW_RIGHT) {
    setCurrentScreenIndex(true);
    showScreen(currentScreenIndex);
  }

  if (evt.keyCode === Keycode.ARROW_LEFT) {
    setCurrentScreenIndex(false);
    showScreen(currentScreenIndex);
  }
};

showScreen(currentScreenIndex);
document.addEventListener(`keydown`, documentKeydownHandler);
