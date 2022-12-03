import React from "react";
import "./style.css";
class App extends React.Component {
constructor() {
 super();
}

render() {
  return (
    <div className='container py-5'>
      <h1>FEEDUITEUN APPS</h1>
      <span className='title-md'>sisa uang kamu tersisa 75% lagi</span>
    </div>
  );
}
}
export default App;