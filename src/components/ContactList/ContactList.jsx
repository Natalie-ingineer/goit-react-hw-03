import css from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";

export const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
