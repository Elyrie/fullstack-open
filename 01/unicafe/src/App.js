import React, { useState } from 'react'

const Button = ({ giveFeedback, text }) => (
  <button onClick={giveFeedback}>{text}</button>
)

const StatisticsLine = ({ text, stat, suffix }) => (
      <tr>
      <th>{text}</th>
      <th>{stat.toFixed(2)} {suffix}</th>
      </tr>
    )

const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return (
      <h2>No feedback given</h2>
    )
  }
  return (
    <table style={{ textAlign: "left" }}>
      <StatisticsLine text="good" stat={good} />
      <StatisticsLine text="neutral" stat={neutral} />
      <StatisticsLine text="bad" stat={bad} />
      <StatisticsLine text="all" stat={all} />
      <StatisticsLine text="average" stat={(good - bad) / all} />
      <StatisticsLine text="positive" stat={(good / all) * 100} suffix="%"/>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)  
  }

  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button giveFeedback={handleGoodClick} text="Good"/>
      <Button giveFeedback={handleNeutralClick} text="Neutral"/>
      <Button giveFeedback={handleBadClick} text="Bad"/>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App
