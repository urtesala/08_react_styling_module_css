import css from './Card.module.css';

function Card() {
  return (
    <div className={css.card}>
      <h2 className={css.title}>James Bond</h2>
      <h3 className={css.subtitle}>Title: 007</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        temporibus. Dicta dolorem eos at mollitia doloribus modi minus
        voluptate. Ipsam.
      </p>
    </div>
  );
}
export default Card;
