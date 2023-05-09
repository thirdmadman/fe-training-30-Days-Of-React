import './App.css';
import {HexColorGenerator} from './components/HexColorGenerator';
import {NumberGenerator} from './components/NumberGenerator';
import {SubscribeForm} from './components/SubscribeForm';
import {Technologies} from './components/Technologies';

function App() {
  return (
    <div className='App'>
      <Technologies />
      <SubscribeForm title={{title: 'Subscribe', subtitle: 'Sign up with your email address to receive news and updates.'}} />
      <HexColorGenerator numberOfPlates={5} isPlates={false} />
      <NumberGenerator countOfNumbers={32}/>
      <HexColorGenerator numberOfPlates={32} isPlates={true} />
    </div>
  );
}

export default App;
