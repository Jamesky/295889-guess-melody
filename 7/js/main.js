(function () {
'use strict';

var renderScreen = (screen) => {
  const app = document.querySelector(`.app`);
  const currentScreen = document.querySelector(`.main`);

  app.replaceChild(screen, currentScreen);
};

var getElementbyTemplate = (template) => {
  const elem = document.createElement(`div`);
  elem.innerHTML = template;
  return elem.firstChild;
};

var audio = [
  {
    artist: `Kevin MacLeod`,
    name: `Long Stroll`,
    image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    genre: `Jazz`
  },
  {
    artist: `Jingle Punks`,
    name: `In the Land of Rhinoplasty`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    genre: `Rock`
  },
  {
    artist: `Audionautix`,
    name: `Travel Light`,
    image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    genre: `Country`
  },
  {
    artist: `Riot`,
    name: `	Level Plane`,
    image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    genre: `R&B`
  },
  {
    artist: `Jingle Punks`,
    name: `Lucky Day`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    genre: `Pop`
  },
  {
    artist: `Gunnar Olsen`,
    name: `Home Stretch`,
    image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    genre: `Electronic`
  }
];

const settings = {
  maxGametime: 300000,
  maxCountMistakes: 3,
  maxQuickAnswerTime: 30000,
  countLevels: 10
};

const state = {
  timeLeft: settings.maxGametime,
  mistakes: 0,
  level: 0,
  results: [],
  isReset: false,
  reset() {
    this.time = settings.maxGametime;
    this.mistakes = 0;
    this.level = 0;
    this.results = [];
    this.isReset = false;
  }
};

const questions = [
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    audioSrc: audio[1].src,
    answerList: [
      {
        answer: audio[0].artist,
        isCorrect: false
      },
      {
        answer: audio[1].artist,
        isCorrect: true
      },
      {
        answer: audio[2].artist,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [
      {
        answer: audio[2].src,
        isCorrect: true
      },
      {
        answer: audio[3].src,
        isCorrect: true
      },
      {
        answer: audio[4].src,
        isCorrect: false
      },
      {
        answer: audio[5].src,
        isCorrect: false
      }
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    audioSrc: audio[1].src,
    answerList: [
      {
        answer: audio[0].artist,
        isCorrect: false
      },
      {
        answer: audio[1].artist,
        isCorrect: true
      },
      {
        answer: audio[2].artist,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [
      {
        answer: audio[2].src,
        isCorrect: true
      },
      {
        answer: audio[3].src,
        isCorrect: true
      },
      {
        answer: audio[4].src,
        isCorrect: false
      },
      {
        answer: audio[5].src,
        isCorrect: false
      }
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    audioSrc: audio[1].src,
    answerList: [
      {
        answer: audio[0].artist,
        isCorrect: false
      },
      {
        answer: audio[1].artist,
        isCorrect: true
      },
      {
        answer: audio[2].artist,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [
      {
        answer: audio[2].src,
        isCorrect: true
      },
      {
        answer: audio[3].src,
        isCorrect: true
      },
      {
        answer: audio[4].src,
        isCorrect: false
      },
      {
        answer: audio[5].src,
        isCorrect: false
      }
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    audioSrc: audio[1].src,
    answerList: [
      {
        answer: audio[0].artist,
        isCorrect: false
      },
      {
        answer: audio[1].artist,
        isCorrect: true
      },
      {
        answer: audio[2].artist,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [
      {
        answer: audio[2].src,
        isCorrect: true
      },
      {
        answer: audio[3].src,
        isCorrect: true
      },
      {
        answer: audio[4].src,
        isCorrect: false
      },
      {
        answer: audio[5].src,
        isCorrect: false
      }
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    audioSrc: audio[1].src,
    answerList: [
      {
        answer: audio[0].artist,
        isCorrect: false
      },
      {
        answer: audio[1].artist,
        isCorrect: true
      },
      {
        answer: audio[2].artist,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [
      {
        answer: audio[2].src,
        isCorrect: true
      },
      {
        answer: audio[3].src,
        isCorrect: true
      },
      {
        answer: audio[4].src,
        isCorrect: false
      },
      {
        answer: audio[5].src,
        isCorrect: false
      }
    ]
  }
];

const statistics = [1, 2, 3, 4, 5];

const isArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return false;
    }
  }
  return true;
};

var processingAnswer = (answers, question) => {
  const correctAnswers = question.answerList.filter((item) => {
    return item.isCorrect;
  }).map((item) => {
    return item.answer;
  });

  const checkAnswer = isArrayEqual(answers, correctAnswers);

  state.results.push({time: 30001, isCorrect: checkAnswer});

  if (!checkAnswer) {
    state.mistakes++;
  }
};

var getStateTemplate = (state) => {

  return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(../#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">
      ${new Array(state.mistakes)
      .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
      .join(``)}
    </div>`;

};

var getPlayerTemplate = (audioSrc) => {

  return `<div class="player-wrapper">
        <div class="player">
          <audio src="${audioSrc}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>`;
};

var getScreenLevelArtist = (state, question) => {

  const title = `<h2 class="title main-title">${question.title}</h2>`;

  const answersList = question.answerList.map((item, i) => {
    return `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="${item.answer}"/>
          <label class="main-answer" for="answer-${i + 1}">
            <img class="main-answer-preview" src="http://placehold.it/134x134"
                 alt="${item.answer}" width="134" height="134">
            ${item.answer}
          </label>
        </div>`;
  }).join(``);

  const template = `<section class="main main--level main--level-artist">
    ${getStateTemplate(state)}
    <div class="main-wrap">
      ${title}
      ${getPlayerTemplate(question.audioSrc)}
      <form class="main-list">
        ${answersList}
      </form>
    </div>
  </section>`;

  const screen = getElementbyTemplate(template);

  const answers = screen.querySelectorAll(`.main-answer-r`);

  const answerClickHandler = (evt) => {
    processingAnswer([evt.target.value], question);
    switchScreen();
  };

  answers.forEach((item) => {
    item.addEventListener(`click`, answerClickHandler);
  });

  return screen;
};

var getScreenLevelGenre = (state, question) => {

  const title = `<h2 class="title main-title">${question.title}</h2>`;

  const answersList = question.answerList.map((item, i) => {
    return `<div class="genre-answer">
          ${getPlayerTemplate(item.answer)}
          <input type="checkbox" name="answer" value="${item.answer}" id="a-${i + 1}">
          <label class="genre-answer-check" for="a-${i + 1}"></label>
        </div>`;
  }).join(``);

  const template = `<section class="main main--level main--level-genre">
   ${getStateTemplate(state)}
    <div class="main-wrap">
      ${title}
      <form class="genre">
        ${answersList}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;

  const screen = getElementbyTemplate(template);

  const button = screen.querySelector(`.genre-answer-send`);
  button.disabled = true;

  const answers = screen.querySelectorAll(`input[name="answer"]`);

  const isSomeAnswerSelected = () => {
    return Array.from(answers).some((item) => item.checked);
  };

  const answerClickHandler = () => {
    if (isSomeAnswerSelected()) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  };

  Array.from(answers).forEach((item) => {
    item.addEventListener(`click`, answerClickHandler);
  });

  const buttonClickHandler = (evt) => {
    evt.preventDefault();
    processingAnswer(Array.from(answers).filter((item) => {
      return item.checked;
    }).map((item) => {
      return item.value;
    }), question);
    switchScreen();
  };

  button.addEventListener(`click`, buttonClickHandler);

  return screen;

};

var getLogoTemplate = () => {

  return `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>`;
};

var getReplayButtonTemplate = (buttonText) => {
  return `<span role="button" tabindex="0" class="main-replay">${buttonText}</span>`;
};

var getScreenResultAttemptsOver = () => {

  const title = `<h2 class="title">Какая жалость!</h2>`;

  const statTemplate = `<div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;

  const template = `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${statTemplate}
    ${getReplayButtonTemplate(`Попробовать ещё раз`)}
  </section>`;

  const screen = getElementbyTemplate(template);

  const replayButton = screen.querySelector(`.main-replay`);

  const replayButtonClickHandler = () => {
    switchScreen();
  };

  replayButton.addEventListener(`click`, replayButtonClickHandler);

  return screen;

};

var getScreenResultTimeOver = () => {

  const title = `<h2 class="title">Увы и ах!</h2>`;

  const statTemplate = `<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;

  const template = `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${statTemplate}
    ${getReplayButtonTemplate(`Попробовать ещё раз`)}
  </section>`;

  const screen = getElementbyTemplate(template);

  const replayButton = screen.querySelector(`.main-replay`);

  const replayButtonClickHandler = () => {
    switchScreen();
  };

  replayButton.addEventListener(`click`, replayButtonClickHandler);

  return screen;

};

var getScore = (answers) => {
  return answers.reduce((sum, current) => {
    if (current.isCorrect && current.time < settings.maxQuickAnswerTime) {
      return sum + 2;
    } else if (current.isCorrect) {
      return sum + 1;
    } else {
      return sum - 2;
    }
  }, 0);

};

var getResultText = (statistics, score) => {

  statistics.push(score);
  statistics.sort((left, right) => right - left);
  const countOfPlayers = statistics.length;
  const position = statistics.lastIndexOf(score) + 1;
  const percent = (countOfPlayers - position) / countOfPlayers * 100;

  return `Вы заняли ${position} место из ${countOfPlayers} игроков. Это&nbsp;лучше чем у&nbsp;${percent}%&nbsp;игроков`;

};

var getScreenResultWin = () => {

  const title = `<h2 class="title">Вы настоящий меломан!</h2>`;

  const score = getScore(state.results);

  const countQuickAnswers = state.results.filter((item) => {
    return (item.isCorrect && item.time < settings.maxQuickAnswerTime);
  }).length;

  const statTemplate = `<div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${score} баллов (${countQuickAnswers} быстрых)
      <br>совершив ${state.mistakes} ошибки</div>
    <span class="main-comparison">${getResultText(statistics, score)}</span>`;

  const template = `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${statTemplate}
    ${getReplayButtonTemplate(`Сыграть ещё раз`)}
  </section>`;

  const screen = getElementbyTemplate(template);

  const replayButton = screen.querySelector(`.main-replay`);

  const replayButtonClickHandler = () => {
    switchScreen();
  };

  replayButton.addEventListener(`click`, replayButtonClickHandler);

  return screen;
};

var switchScreen = () => {

  if (state.isReset) {
    state.reset();
    renderScreen(getScreenWelcome());

  } else if (state.timeLeft === 0) {
    renderScreen(getScreenResultTimeOver());
    state.isReset = true;

  } else if (state.mistakes > settings.maxCountMistakes) {
    renderScreen(getScreenResultAttemptsOver());
    state.isReset = true;

  } else if (state.level === settings.countLevels) {
    renderScreen(getScreenResultWin());
    state.isReset = true;

  } else {
    if (questions[state.level].type === `artist`) {
      renderScreen(getScreenLevelArtist(state, questions[state.level]));
    } else if (questions[state.level].type === `genre`) {
      renderScreen(getScreenLevelGenre(state, questions[state.level]));
    }
    state.level++;

  }

};

var getScreenWelcome = () => {

  const title = `<h2 class="title main-title">Правила игры</h2>`;

  const buttonPlay = `<button class="main-play">Начать игру</button>`;

  const description = `<p class="text main-text">
      Правила просты&nbsp;— за&nbsp;${settings.maxGametime / 1000 / 60} минут ответить на все вопросы.<br>
      Ошибиться можно ${settings.maxCountMistakes} раза.<br>
      Удачи!
    </p>`;

  const template = `<section class="main main--welcome">
    ${getLogoTemplate()}
    ${buttonPlay}
    ${title}
    ${description}
  </section>`;

  const screen = getElementbyTemplate(template);

  const playButton = screen.querySelector(`.main-play`);

  const playButtonClickHandler = () => {
    switchScreen();
  };

  playButton.addEventListener(`click`, playButtonClickHandler);

  return screen;
};

renderScreen(getScreenWelcome());

}());

//# sourceMappingURL=main.js.map
