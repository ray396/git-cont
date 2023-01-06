import Title from './components/Title';
import Counter from './components/Counter';

import niver from './assets/niver1.png';

import useCountdown from './hooks/useCountdown';

import './App.css';

function App() {
  const [day, hour, minute, second] = useCountdown("Jun 26, 2023 00:00:00");

  return (
    <div className="App" style={{backgroundImage: `url(${niver})`}}>
      <div className="container">
        <Title title="countdown regressiva para meu aniversário"/>
        <div className="countdown-container">
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  );
}

export default App;
