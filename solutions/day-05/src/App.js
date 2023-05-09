import './App.css';
import { HexColorGenerator } from './components/HexColorGenerator';
import { SubscribeForm } from './components/SubscribeForm';
import { Technologies } from './components/Technologies';

function App() {
  return (
    <div className="App">
      {<Technologies/>}
      {<SubscribeForm title={{ title: 'Subscribe', subtitle: 'Sign up with your email address to receive news and updates.' }}/>}
      {<HexColorGenerator/>}
    </div>
  );
}

export default App;
