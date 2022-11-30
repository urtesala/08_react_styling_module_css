import './App.css';
import Card from './components/card/Card';
import UserCard from './components/userCard/UserCard';
import Grid from './components/UI/grid/Grid';
import Button from './components/UI/btn/Button';

function App() {
  return (
    <div className='App container'>
      <h1>React</h1>
      <Button secondary>I am secondary btn</Button>
      <Button>Read more</Button>
      <Button size='lg'>Read more twice</Button>

      <Grid>
        <Card />
        <Card />
        <Card />
      </Grid>
      {/* <Card /> */}

      <div className='card'>
        <h2 className='title'>Hello</h2>
      </div>

      <UserCard />
    </div>
  );
}

export default App;
