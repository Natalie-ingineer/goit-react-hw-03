import css from "../Description/Description.module.css";
const Description = ({ children }) => {
  return <div className={css.description}>{children}</div>;
};

export { Description };
