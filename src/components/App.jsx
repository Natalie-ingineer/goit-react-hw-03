import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";

import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("number-of-clicks");

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem(
      "number-of-clicks",
      JSON.stringify([...clicks])
    );
  }, [clicks]);

  const onLeaveFeedback = (option) => {
    setClicks({
      ...clicks,
      [option]: clicks[option] + 1,
    });
  };

  let totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  let positiveFeedback = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  let isVisible = totalFeedback > 0;

  const onReset = (option) => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export { App };
