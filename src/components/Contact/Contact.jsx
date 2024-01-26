import css from "./Contact.module.css";

export const Contact = ({ contact, onDeleteUser }) => {
  return (
    <div className={css.wraper}>
      <div>
        <p className={css.userName}>{contact.name}</p>
        <p className={css.userPhone}>{contact.number}</p>
      </div>
      <div>
        <button
          className={css.btnCard}
          onClick={() => onDeleteUser(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
