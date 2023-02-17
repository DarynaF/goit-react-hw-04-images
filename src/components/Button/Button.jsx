import PropTypes from 'prop-types';
import css from './button.module.css';

const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={css.btnLoadMore} type="button">
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
