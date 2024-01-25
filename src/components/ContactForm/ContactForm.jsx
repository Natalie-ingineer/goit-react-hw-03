import css from "./ContactForm.module.css";
import { useId } from "react";

export const ContactForm = ({ onSubmit }) => {
  // const handlerSubmit = (evt) => {
  //   evt.preventDefault();
  //   onSubmit(evt.target.elements.username.value);
  //   evt.target.reset();
  // };
  // return (
  //   <form onSubmit={handlerSubmit}>
  //     <input type="text" name="username" />
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  const usernameFieldId = useId();

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(evt.target.elements.username.value);
    evt.target.reset();
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <label htmlFor={usernameFieldId}>Username</label>
        <input type="text" name="username" id={usernameFieldId} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
