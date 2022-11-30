import css from './Grid.module.css';

function Grid(props) {
  console.log('props ===', props);

  let divStyles = {
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  };

  // jei negaunam props.cols, divStyles turetu buti tuscias objekas
  if (!props.cols) {
    divStyles = {};
  }

  return (
    <div style={divStyles} className={css.grid}>
      {props.children}
    </div>
  );
}
export default Grid;
