const Header = (props) => <h2>{props.course}</h2>

const Total = (props) => <h4>total of {props.total} exercises</h4>

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Content = (props) => (
  <div>
    {props.parts.map(part => 
        <Part key = {part.id} part={part} />
    )}
  </div>
)

const Course = ({course}) =>{
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={
          course.parts
            .reduce((sum,cur) => sum + cur.exercises, 0)
        }
      />
    </div>
  )
}

export default Course