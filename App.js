import React from 'react'
import ReactDOM from 'react-dom/client'

// 1️⃣Part - 1
// create a react element
/*
// React.createElement => object => render onto the DOM => html element
const heading = React.createElement("h1", {id : "heading"}, "Namaste React...") 
// heading --> object 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
// root.render(heading) --> render the heading object onto the DOM => html element
*/

//till now -> Core react but it is hard to read 
// 2️⃣part - 2
/*
- JSX came into picture to make it easy to read
- JSX is not part of react 
- JSX is not a language it is a syntax extension of javascript
- JSX is not html in javascript
- JSX is a html like syntax in javascript but not html inside javascript
- 🧑‍💻JSX is the syntactic sugar for React.createElement
- 💭JSX is transformed into React.createElement
- 🧑‍💻JSX is more readable and easy to write
- 🧑‍💻JSX is created by facebook developers
*/

// 3️⃣part - 3
// const jsxHeading = (
//     <h1 className="head">
//         Namaste React🚀
//     </h1>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)

// 4️⃣part - 4
/*
- JSX -> brower does not understand JSX
- how it is working in the browser ?
    - Babel -> transpiler -> convert JSX to React.createElement
    - Babel is a javascript compiler
🧑‍💻JSX => transpiled by Babel => React.createElement => render onto the DOM
*/

// 5️⃣part - 5 : React Components
/*
- everything in react is a component
- There are two type of compunents
    - class based components =>old way of writing code
    - functional components => new way of writing code
*/

// 6️⃣part - 6 : Functional Components
/*
- name starts with capital letter
- Functional components are javascript functions
- return JSX(react element)
- function returning a react element(jsx) is called functional component
*/

// method - 1
// const HeadingComponent = () => {
//     return <h1>Namaste react Functional components..</h1>
// }
// method - 2
// const HeadingComponent = () => (<h1>Namaste react Functional components..</h1>)


// method - 3
// const HeadingComponent = () => <h1>Namaste react Functional components..</h1>

// root.render(<HeadingComponent/>)


// 7️⃣part - 7 : Component Composition
const Title = () => <h1>React Component Composition</h1>
const HeadingComponent = () => (
    <div>
        <Title/>
        <h2>React is a library for building user interfaces</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)










