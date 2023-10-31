import logo from './logo.svg';
import { dummyData } from './data';
import Header from './components/Header/Header';
import './App.css';

function App() {
  console.log(dummyData)
  
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;