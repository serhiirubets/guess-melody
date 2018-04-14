const byAsc = (a, b) => a - b;

export default (otherPlayerScores, playerResult) => {
  if (playerResult.leftTime <= 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (playerResult.leftNotes <= 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  if (playerResult.points <= 0) {
    return `Вы не набрали нужное кол-во балов`;
  }

  const statistics = [...otherPlayerScores, playerResult.points].sort(byAsc);
  const playerIndex = statistics.indexOf(playerResult.points);
  const playersLength = statistics.length;
  const place = playersLength - playerIndex;
  const percent = parseInt(((playerIndex / statistics.length) * 100), 10);

  return `Вы заняли ${place} место из ${statistics.length} игроков. Это лучше, чем у ${percent}% игроков`;
};
