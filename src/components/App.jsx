import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";

import { useState, useEffect } from "react";

export const App = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [users, setUsers] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  console.log(visibleUsers);

  const deleteUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  // const handlerChange = (evt) => {
  //   console.log(evt.target.value);
  //   setInputValue(evt.target.value);
  // };
  // const [users, setUsers] = useState(() => {
  //   const savedUsers = window.localStorage.getItem("number-of-clicks");

  //   if (savedUsers !== null) {
  //     return JSON.parse(savedUsers);
  //   }

  //   return [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ];
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("number-of-clicks", JSON.stringify([...users]));
  // }, [users]);

  // const onLeaveFeedback = (option) => {
  //   setUsers({
  //     ...users,
  //     [option]: users[option] + 1,
  //   });
  // };

  // let totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  // let positiveFeedback = Math.round(
  //   ((clicks.good + clicks.neutral) / totalFeedback) * 100
  // );

  // let isVisible = totalFeedback > 0;

  // const onReset = (option) => {
  //   setClicks({ good: 0, neutral: 0, bad: 0 });
  // };
  // const makePayment = (username) => {
  //   console.log("makePayment:", username);
  // };
  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm onSubmit={makePayment} /> */}
      <SearchBox value={nameFilter} onFilter={setNameFilter} />
      <ContactList items={visibleUsers} onDelete={deleteUser} />
    </>
  );
};
