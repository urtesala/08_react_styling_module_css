import css from './Button.module.css';

function Button(props) {
  const btnSize = props.size;
  console.log('btnSize ===', btnSize);
  // jei btnSize yra lg tai reikia prideti papildomai clase css.large

  const largeBtn = btnSize === 'lg' ? css.large : '';
  const smallBtn = btnSize === 'sm' ? css.small : '';

  // jei gavim props secodary, tai prideam klase .secondary
  // aprasyti klase .secondary - bacground color coral

  const secondaryClass = props.secondary ? css.secondary : '';

  return (
    <button className={`${css.btn} ${largeBtn} ${smallBtn} ${secondaryClass}`}>
      {props.children}
    </button>
  );
}
export default Button;
