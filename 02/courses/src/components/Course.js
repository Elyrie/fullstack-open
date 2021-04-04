const Header = ({ courseName }) => (
    <h1>{courseName}</h1>
)

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
)

const Content = ({ course }) => (
    <div>
        {course.parts.map(part =>
        <Part key={part.id} part={part} />
        )}
    </div>
)

const Total = ({ course }) => {
    const total = course.parts.reduce((acc, currentValue) => {
        return acc + currentValue.exercises
    }, 0)
    return (
        <p style={{fontWeight: "bold"}}>
        total of {total} exercises
        </p>
    )
}

const Course = ({ course }) => (
    <div>
        <Header courseName={course.name} />
        <Content course={course} />
        <Total course={course} />
    </div>
)

export default Course