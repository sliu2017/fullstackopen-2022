import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Feedback = ({ incrementGood, incrementNeutral, incrementBad }) => (
  <>
    <h1>give feedback</h1>
    <Button onClick={incrementGood} text="good" />
    <Button onClick={incrementNeutral} text="neutral" />
    <Button onClick={incrementBad} text="bad" />
  </>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const averageScore = (good - bad) / totalFeedback;
  const positivePercentage = good / totalFeedback;
  return (
    <>
      <h1>statistics</h1>
      {totalFeedback > 0 ? (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="average" value={averageScore} />
            <StatisticLine
              text="positive"
              value={positivePercentage.toString().concat(" % ")}
            />
          </tbody>
        </table>
      ) : (
        <>No feedback given</>
      )}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  return (
    <div>
      <Feedback
        incrementGood={incrementGood}
        incrementNeutral={incrementNeutral}
        incrementBad={incrementBad}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
