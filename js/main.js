const Keycode = {
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
};

const template = document.querySelector(`template`);
const markup = template.content.cloneNode(true);
const screens = markup.querySelectorAll(`.main`);
const container = document.querySelector(`.main`);
const lastScreenIndex = screens.length - 1;

let currentScreenIndex = 0;

const showScreen = (index) => {
  container.innerHTML = ``;
  container.appendChild(screens[index]);
};

const shouldNextScreenShow = (evt) => {
  return evt.keyCode === Keycode.ARROW_RIGHT && currentScreenIndex < lastScreenIndex;
};

const shouldPreviousScreenShow = (evt) => evt.keyCode === Keycode.ARROW_LEFT && currentScreenIndex > 0;

const documentKeydownHandler = (evt) => {
  if (!evt.altKey) {
    return;
  }

  if (shouldNextScreenShow(evt)) {
    currentScreenIndex++;
    showScreen(currentScreenIndex);
  }

  if (shouldPreviousScreenShow(evt)) {
    currentScreenIndex--;
    showScreen(currentScreenIndex);
  }
};

showScreen(currentScreenIndex);
document.addEventListener(`keydown`, documentKeydownHandler);
