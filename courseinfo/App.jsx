const Header = (props) => {
  return (
  <div>
    <h1>{props.props.name}</h1>
  </div>
  )
}
const Part = (props) => {
  return(
    <p>{props.name} {props.exercises}</p>
  )
}
const Content = (props) => {

  return (
    <div>
      <Part name={props.props.parts[0].name} exercises={props.props.parts[0].exercises} />
      <Part name={props.props.parts[1].name} exercises={props.props.parts[1].exercises} />
      <Part name={props.props.parts[2].name} exercises={props.props.parts[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.props.parts[0].exercises + props.props.parts[1].exercises + props.props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header props = {course}/>
      <Content props = {course}/>
      <Total props = {course}/>
    </div>
  )
}

export default App