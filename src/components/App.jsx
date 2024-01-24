import { useState, useEffect } from "react";
import { Description } from "../components/Description/Description";
import { Options } from "../components/Options/Options";
import { Feedback } from "../components/Feedback/Feedback";
import { Notification } from "../components/Notification/Notification";

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("number-of-clicks");

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem(
      "number-of-clicks",
      JSON.stringify({ ...clicks })
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
    <>
      <Description>
        <h1 className="caption">Sip Happens Café</h1>
        <p className="text-description">
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </Description>

      <Options
        value={clicks}
        onUpdate={onLeaveFeedback}
        onReset={onReset}
        disabled={isVisible}
      />
      {totalFeedback > 0 ? (
        <Feedback
          value={clicks}
          onUpdate={onLeaveFeedback}
          onTotal={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification>
          <p className="notification">No feedback yet</p>
        </Notification>
      )}
    </>
  );
};

export { App };
