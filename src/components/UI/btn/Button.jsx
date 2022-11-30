import css from './Button.module.css';

function Button(props) {
  const btnSize = props.size;
  console.log('btnSize ===', btnSize);

  return (
    <button className={`${css.btn} ${btnSize === 'lg' ? css.large : ''}`}>
      {props.children}
    </button>
  );
}
export default Button;
