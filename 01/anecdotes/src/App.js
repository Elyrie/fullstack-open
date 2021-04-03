import React, { useState } from 'react'

function findIndexOfMax(array) {
  var max = 0
  var indexOfMax
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= max) {
      max = array[i]
      indexOfMax = i
    }
  }
  return indexOfMax
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [max, setMax] = useState(0)

  const vote = (selected) => {
    let newVotes = [...votes]
    newVotes[selected]++
    if (newVotes[selected] >= votes[findIndexOfMax(votes)]) {
      setMax(selected)
    }
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <button onClick={() => vote(selected)}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * 6))}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[max]}
      <br />
      has {votes[max]} votes
    </div>
  )
}

export default App
