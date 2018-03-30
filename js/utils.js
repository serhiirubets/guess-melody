const container = document.querySelector(`.main`);

export const getElementFromTemplate = (template) => {
  const outer = document.createElement(`template`);
  outer.innerHTML = template;
  return outer.content.children[0];
};

export const showScreen = (element) => {
  container.innerHTML = ``;
  container.appendChild(element);
};

export const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};
