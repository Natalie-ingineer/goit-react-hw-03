import css from "./Contact.module.css";

export const Contact = ({ contact }) => {
  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button>Delete</button>
    </div>
  );
};
