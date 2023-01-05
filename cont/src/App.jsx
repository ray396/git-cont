import Title from './components/Title';
import Counter from './components/Counter';

import niver from './assets/niver1.png';

import './App.css';

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(${niver})`}}>
      <div className="container">
        <Title title="countdown regressiva para 2023"/>
        <div className="countdown-container">
          <Counter title="Dias" number={2}/>
          <Counter title="Horas" number={2}/>
          <Counter title="Minutos" number={2}/>
          <Counter title="Segundos" number={2}/>
        </div>
      </div>
    </div>
  );
}

export default App;
