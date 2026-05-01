import './App.css';
import Footer from './style/components/Footer/index.jsx';
import Head from './style/components/Head/index.jsx';
import Main from './style/components/Main/index.jsx';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Footer />
        <Head />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
