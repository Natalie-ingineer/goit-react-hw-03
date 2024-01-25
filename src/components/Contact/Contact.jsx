import css from "./Contact.module.css";

export const Contact = ({ contact, onDeleteUser }) => {
  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={() => onDeleteUser(contact.id)}>Delete</button>
    </div>
  );
};
