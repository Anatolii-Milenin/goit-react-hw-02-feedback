import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeavefeedback, options }) => {
  return (
    <div className={css.wrap}>
      {options.reduce((acc, name, i) => {
        acc.push(
          <button
            key={i + 1}
            className={css[name]}
            onClick={() => {
              onLeavefeedback(name);
            }}
          >
            {name}
          </button>
        );
        return acc;
      }, [])}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeavefeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
