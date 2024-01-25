import css from "./ContactForm.module.css";
import { useId } from "react";

export const ContactForm = ({ onAdd }) => {
  const usernameFieldId = useId();
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

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.elements.name.value);
    console.log(onAdd);
    evt.target.reset();
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <label htmlFor={usernameFieldId}>Username</label>
        <input type="text" name="name" id={usernameFieldId} />
      </div>

      <button type="submit">Add user</button>
    </form>
  );
};
