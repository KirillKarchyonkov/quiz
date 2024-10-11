import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Что такое Virtual DOM?',
    variants: [
      'Это реальный DOM браузера',
      'Это понятие, связанное с сервером',
      'Это абстрактное представление DOM, используемое в React для оптимизации обновлений',
    ],
    correct: 2,
  },
  {
    title: 'Для чего используется метод `render()` в классовых компонентах React?',
    variants: [
      'Для отправки запросов на сервер',
      'Для отрисовки компонента в DOM',
      'Для обработки данных',
    ],
    correct: 1,
  },
  {
    title: 'Что такое props в React?',
    variants: [
      'Внутреннее состояние компонента',
      'Параметры, передаваемые в компонент',
      'Методы для работы с базой данных',
    ],
    correct: 1,
  },
  {
    title: 'Как обновить состояние в React?',
    variants: [
      'Использовать `document.getElementById()`',
      'Использовать метод `setState()`',
      'Использовать прямую модификацию состояния',
    ],
    correct: 1,
  },
  {
    title: 'Что такое хуки в React?',
    variants: [
      'Функции для работы с состоянием и жизненным циклом компонентов в функциональных компонентах',
      'Ошибки в коде, которые нужно исправить',
      'Специальные библиотеки для стилизации',
    ],
    correct: 0,
  },
  {
    title: 'Что делает хук `useEffect`?',
    variants: [
      'Позволяет взаимодействовать с жизненным циклом компонента',
      'Отправляет данные на сервер',
      'Изменяет стили компонента',
    ],
    correct: 0,
  },
  {
    title: 'Что такое контекст (context) в React?',
    variants: [
      'Механизм для передачи данных без пропсов по дереву компонентов',
      'Функция для обновления данных в базе данных',
      'Библиотека для анимации компонентов',
    ],
    correct: 0,
  }
  
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из 10</h2>
      <a href='https://kirillkarchyonkov.github.io/quiz/'><button>Попробовать снова</button></a>
    </div>
  );
}

function Game({question, onClickQuestion, step}) {
  
  const persent = step / questions.length * 100
  
  return (
    <>
      <div className="progress">
        <div style={{ width: `${persent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => <li
        key={text}
        onClick={() => onClickQuestion(index)}
        >{text}</li>)}
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]


  const onClickQuestion = (index) => {

      setStep(step + 1)

      if (index === question.correct) {
        setCorrect(correct + 1)
      }
  }


  return (
    <div className="App">

      {step !== questions.length ?

        <Game question={question} onClickQuestion={onClickQuestion} step={step}/>
      : 
        <Result correct={correct}/>
      }
      
    </div>
  );
}

export default App;
