export const Feedback = ({ value, onUpdate, onTotal, positiveFeedback }) => {
  return (
    <div>
      <p onClick={() => onUpdate}>Good: {value.good}</p>
      <p onClick={() => onUpdate}>Neutral: {value.neutral}</p>
      <p onClick={() => onUpdate}>Bad: {value.bad}</p>
      <p onClick={() => onTotal}>Total: {onTotal}</p>
      <p onClick={() => onTotal}>Positive: {positiveFeedback} %</p>
    </div>
  );
};
