import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) => {
  if((props.good + props.neutral + props.bad) > 0){
    return(
      <div>
        <StatisticLine text = "good" value = {props.good}/>
        <StatisticLine text = "neutral" value = {props.neutral} />
        <StatisticLine text = "bad" value = {props.bad} />
        <StatisticLine text = "all" value = {props.good + props.neutral + props.bad} />
        <StatisticLine text = "average" value = {((props.good) + (props.neutral * 0) + (props.bad * -1)) / (props.good + props.neutral + props.bad)} />
        <StatisticLine text = "positive" value ={props.good * 100 / (props.good + props.neutral + props.bad) + "%"} />
      </div>
    )
  }
  return(
    <div>
      <p>
        No feedback given
      </p>
    </div>
  )
}

const Button = (props) => {

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>
      <table>
        <tr><Statistics good = {good} neutral = {neutral} bad = {bad} /></tr>
      </table>
      
    </div>
  )
}

export default App