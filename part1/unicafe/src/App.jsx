import { useState } from 'react'

const Button = ({text, handleClick}) => <button onClick={handleClick}> {text} </button>

const Statistics = ({good,neutral,bad}) => {
  const all = good+neutral+bad
  const safeDivide = (numerator, denominator) => denominator !== 0 ? numerator/denominator : 0
  return(
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {safeDivide(good - bad, all)}</p>
      <p>positive {safeDivide(good * 100, all)} %</p>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good"    handleClick={() => setGood(good + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad"     handleClick={() => setBad(bad + 1)}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App