import css from "./SearchBox.module.css";
import { useId } from "react";
// import { useState } from "react";

export const SearchBox = ({ value, onFilter }) => {
  const usernameFieldId = useId();
  return (
    <div className={css.btnWrap}>
      <label className={css.description} htmlFor={usernameFieldId}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
        id={usernameFieldId}
      />
    </div>
  );
};
