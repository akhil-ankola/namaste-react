import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Hello");
console.log(heading);

//jsx heading
const jsxheading = <div className="abc"><h1 id="heading">heading in JSX</h1></div>
console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);