// const heading = React.createElement('h1', {}, "Kya haal hai bhai..")
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)
// creating a nested element in react 
/*
<div id="parent">
    <div id="child">
        <h1>Mai baccha hu</h1>
    </div>
</div>
🤔💭 andar se bahar ki taraf socho -> like a budding artist
*/ // const heading = React.createElement('h1', {}, "Mai baccha hu...")
// const child = React.createElement('div', {id: 'child'}, heading)
// const parent = React.createElement('div', {id: 'parent'}, child)
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent)
// creating a sibling, we have to pass them in an array 
/*
<h1 id="child1">child1</h1>
<h1 id="child2">child2</h1>
*/ const c1 = React.createElement('h1', {
    id: 'child1'
}, "child 1");
const c2 = React.createElement('h1', {
    id: 'child2'
}, "child 2");
const parent = React.createElement('div', {}, [
    c1,
    c2
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
