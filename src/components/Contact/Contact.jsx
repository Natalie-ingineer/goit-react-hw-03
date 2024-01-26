import { BsPersonLinesFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import css from "./Contact.module.css";

export const Contact = ({ contact, onDeleteUser }) => {
  return (
    <div className={css.wraper}>
      <div className={css.infoWrap}>
        <p className={css.userName}>
          <BsPersonLinesFill className={css.icon} /> {contact.name}
        </p>
        <p className={css.userPhone}>
          <GiRotaryPhone className={css.icon} /> {contact.number}
        </p>
      </div>
      <div>
        <button className={css.button} onClick={() => onDeleteUser(contact.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
