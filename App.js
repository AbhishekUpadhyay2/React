import React from 'react';
import ReactDOM, {createRoot}  from 'react-dom/client';


// const heading=React.createElement("h1",{},"Helllo World from React!!!");
const jsxheading=<h1 id="heading">Helllo World from React!!!</h1>

const HeadingComponent=()=>( <div>
    <h1>React functional component</h1>
    {console.log(jsxheading)}
    {jsxheading.props.children}
    </div>)

const root=createRoot(document.getElementById("root"));
const root2=createRoot(document.getElementById("root2"));
root.render(<HeadingComponent/>);
root2.render(jsxheading)
// console.log(root2.__scope__)
// ReactDOM.render(<HeadingComponent/>, document.getElementById("root"))
// ReactDOM.render(jsxheading, document.getElementById("root2"))