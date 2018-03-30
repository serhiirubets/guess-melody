import {getElementFromTemplate} from '../utils';
import {showScreen} from '../utils';
import artistScreen from './artist';

const html = `
<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
</section>
`;

const element = getElementFromTemplate(html);
const playButton = element.querySelector(`.main-play`);

const onPlayButtonClick = () => {
  showScreen(artistScreen);
};

playButton.addEventListener(`click`, onPlayButtonClick);

export default element;
