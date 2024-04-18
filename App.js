const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hell I am H1 Tag"),
    React.createElement("h2", {}, "Hell I am H2 Tag"),
  ]),
  ,
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hell I am H1 Tag"),
    React.createElement("h2", {}, "Hell I am H2 Tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
