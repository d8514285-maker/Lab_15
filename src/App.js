import './App.css';
import footer from './style/components/footer/index.jsx';
import head from './style/components/head/index.jsx';
import main from './style/components/main/index.jsx';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <footer />
        <head />
        <main />
      </BrowserRouter>
    </div>
  );
}

export default App;
