import css from "./SearchBox.module.css";
// import { useState } from "react";

export const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      />
    </div>
  );
};
