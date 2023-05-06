import './App.css';
import { SubscribeForm } from './components/SubscribeForm';
import { Technologies } from './components/Technologies';

function App() {
  return (
    <div className="App">
      {<Technologies/>}
      {<SubscribeForm/>}
    </div>
  );
}

export default App;
