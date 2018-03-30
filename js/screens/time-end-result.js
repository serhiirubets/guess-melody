import {getElementFromTemplate} from '../utils';
import {showScreen} from '../utils';
import welcomeScreen from './welcome';

const html = `
  <!-- Результат игры: проигрыш время вышло -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`;

const element = getElementFromTemplate(html);
const playAgainButton = element.querySelector(`.main-replay`);

const onPlayAgainButtonClick = () => {
  showScreen(welcomeScreen);
};

playAgainButton.addEventListener(`click`, onPlayAgainButtonClick);

export default element;


