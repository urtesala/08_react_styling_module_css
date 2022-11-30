import Button from '../UI/btn/Button';
import Grid from '../UI/grid/Grid';
import css from './Card.module.css';
import { useState } from 'react';

function Card() {
  // 1. reikia state nuo kurio priklausys ar rodyti title
  const [toShowTitle, setToShowTitle] = useState(true);
  // 2. funkcijos kuri pakeicia state
  function showTitleHandler() {
    console.log('showTitleHandler ran');
    setToShowTitle(false);
  }
  // 3. mygtuko paspaudimu iskviesti funkcija
  // ========================================

  const [toDarkMode, setToDarkMode] = useState(true);

  function darkModeHandler() {
    setToDarkMode(false);
  }

  return (
    <div className={css.card}>
      {toShowTitle && <h2 className={css.title}>James Bond</h2>}

      <h3 className={css.subtitle}>Title: 007</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        temporibus. Dicta dolorem eos at mollitia doloribus modi minus
        voluptate. Ipsam.
      </p>
      <Grid cols={2}>
        <Button className={css.mr2} onClick={showTitleHandler}>
          Hide title
        </Button>
        <Button secondary onClick={darkModeHandler}>
          Dark mode
        </Button>
      </Grid>
    </div>
  );
}
export default Card;
