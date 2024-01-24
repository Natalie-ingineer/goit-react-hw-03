import css from "../Options/Options.module.css";

export const Options = ({ onUpdate, disabled, onReset }) => {
  return (
    <div>
      <button
        className={css.button}
        onClick={() => onUpdate("good")}
        name="good"
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => onUpdate("neutral")}
        name="neutral"
      >
        Neutral
      </button>
      <button className={css.button} onClick={() => onUpdate("bad")} name="bad">
        Bad
      </button>
      {disabled && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
