import React from "react";
import Card from "./components/card"

const App = () => {
  return (
    <div className="parent">
      <Card user="Aman" age={18} img='https://images.unsplash.com/photo-1760012922883-10b191b15d78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500'/>
      <Card user="sarthak" age={38} img='https://images.unsplash.com/photo-1745943374767-642a6d7a15ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500'/>
      <Card user="sarthak" age={38} img='https://images.unsplash.com/photo-1760199129864-df2332e3f3e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032'/>
    </div>
  );
};

export default App;
