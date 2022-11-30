import { useState, useEffect } from 'react';
import css from './UserCard.module.css';

function UserCard(props) {
  const [userData, setUserData] = useState({});

  // efektas kuris pasileidzia tik susikurus komponentui
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const url = 'https://dummyjson.com/users/1';
    const resp = await fetch(url);
    const dataInJs = await resp.json();
    // gavom duomenis
    console.log('dataInJs ===', dataInJs);
    setUserData(dataInJs);
  }

  const { image, lastName, firstName, age, height } = userData;
  return (
    <div className={css.card}>
      <img className={`border ${css.image}`} src={image} alt='user' />
      <h2 className={css.title}>
        {firstName} {lastName}
      </h2>
      <h3>Age {age}</h3>
      <p className={css.text}>Height: {height}cm</p>
    </div>
  );
}
export default UserCard;
