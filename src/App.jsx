import './App.css';
import Card from './components/card/Card';
import UserCard from './components/userCard/UserCard';

function App() {
  return (
    <div className='App container'>
      <h1>React</h1>
      <Card />
      <UserCard />
    </div>
  );
}

export default App;
