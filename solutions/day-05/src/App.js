import './App.css';
import { HexColorGenerator } from './components/HexColorGenerator';
import { SubscribeForm } from './components/SubscribeForm';
import { Technologies } from './components/Technologies';

function App() {
  return (
    <div className="App">
      {<Technologies/>}
      {<SubscribeForm/>}
      {<HexColorGenerator/>}
    </div>
  );
}

export default App;
